import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [regPic, setRegPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [regMessage, setRegMessage] = useState(null);
  const [regPicMessage, setRegPicMessage] = useState(null);

  let navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("regToken");
    if (userInfo) {
      navigate("/");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(loginEmail, loginPassword);

    try {
      console.log("intry");
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // setLoading(true);
      const { data } = await axios.post(
        "http://localhost:3001/api/user/login",
        {
          email: loginEmail,
          password: loginPassword,
        },
        config
      );
      console.log(data);
      localStorage.setItem("regToken", JSON.stringify(data.token));
      navigate("/");
      // setLoading(false);
    } catch (error) {
      console.log("inCatch");
      alert(error.response.data.message);
      setError(error);
      // setLoading(false);
    }
  };

  const toggleForm = () => {
    const container = document.querySelector(".regContainer");
    container.classList.toggle("active");
  };

  const submitRegisterHandler = async (e) => {
    e.preventDefault();
    if (regPassword !== regConfirmPassword) {
      alert("Passwords Do Not Match!");
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.post(
          "http://localhost:3001/api/user/",
          {
            name: regName,
            email: regEmail,
            password: regPassword,
            pic: regPic,
            isAdmin: true,
          },
          config
        );
        alert("Registered Successfully");
        localStorage.setItem("regToken", JSON.stringify(data.token));
      } catch (error) {
        console.log("incatch");
        alert(error.response.data.message);
        setError(error);
      }
    }
  };

  const postDetails = (pics) => {
    if (!pics) {
      alert("Please select an Image");
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "vc-main");
      data.append("cloud_name", "ddrl0obg0");
      fetch("https://api.cloudinary.com/v1_1/ddrl0obg0/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRegPic(data.url.toString());
        })
        .catch((error) => console.log(error));
    } else {
      alert("Please Select an valid Image(jpeg/png)");
    }
  };

  return (
    <section className="section">
      <div className="regContainer">
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src="https://images.pexels.com/photos/4246228/pexels-photo-4246228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="img"
            />
          </div>
          <div className="formBx">
            <form action="" onSubmit={submitHandler} className="form">
              <h2 className="h2">Sign In</h2>
              <input
                className="input"
                type="text"
                name=""
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                className="input"
                type="password"
                name=""
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <input className="input" type="submit" name="" value="Login" />
              <p className="signup">
                Don't have an account ?
                <a href="#" onClick={toggleForm}>
                  Sign Up.
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form action="" onSubmit={submitRegisterHandler} className="form">
              <h2 className="h2">Create an account</h2>

              <input
                className="input"
                type="text"
                name=""
                placeholder="Username"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
              />
              <input
                className="input"
                type="email"
                name=""
                placeholder="Email Address"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
              />
              <input
                className="input"
                type="password"
                name=""
                placeholder="Create Password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
              />
              <input
                className="input"
                type="password"
                name=""
                placeholder="Confirm Password"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
              />
              <input className="input" type="submit" name="" value="Sign Up" />
              <p className="signup">
                Already have an account ?
                <a href="/" onClick={toggleForm}>
                  Sign in.
                </a>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src="https://images.pexels.com/photos/4049991/pexels-photo-4049991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
