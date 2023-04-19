import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  let regToken = localStorage.getItem("regToken");
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Blah</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/guests" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Guests</span>
            </li>
          </Link>
          <Link to="/meetings" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Meetings</span>
            </li>
          </Link>
          <Link to="/feedback" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Feedback</span>
            </li>
          </Link>
          <p className="title">USER</p>

          {regToken ? (
            <li>
              <ExitToAppIcon className="icon" />
              <span
                onClick={() => {
                  localStorage.removeItem("regToken");
                  window.location.href = "/";
                }}
              >
                Logout
              </span>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
