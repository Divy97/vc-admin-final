import "./Single.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Chart from "../../component/chart/Chart";
import MList from "../../component/meetingTable/MeetingTable";
import { useUserID } from "../../context/userContext";
import { useEffect, useState } from "react";
import axios from "axios";

const Single = () => {
  const { userId } = useUserID();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/userData")
      .then(function (response) {
        response.data.data.map((e, i) => {
          if (e._id === userId) {
            setData(e);
          }
        });
        console.log(response.data.data[0]._id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(data);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            {userId ? (
              <>
                <div className="item">
                  <img src={data.pic} alt="" className="itemImg" />
                  <div className="details">
                    <h1 className="itemTitle">{data.name}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">{data.email}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Register Date:</span>
                      <span className="itemValue">{data.createdAt}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Admin:</span>
                      <span className="itemValue">{data.isAdmin}</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Meetings</h1>
          <MList />
        </div>
      </div>
    </div>
  );
};

export default Single;
