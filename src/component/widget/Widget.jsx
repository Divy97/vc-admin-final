import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import axios from "axios";

const Widget = ({ type }) => {
  const [userCount, setUserCount] = useState(0);
  const [meetingCount, setMeetingCount] = useState(0);
  const [guestsCount, setGuestsCount] = useState(0);
  let data;
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/userData")
      .then(function (response) {
        setUserCount(response.data.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/guestData")
      .then(function (response) {
        setGuestsCount(response.data.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/meetingData")
      .then(function (response) {
        setMeetingCount(response.data.data.length);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  //temporary
  const amount = userCount;
  let amount2 = meetingCount;
  let amount3 = guestsCount;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "MEETINGS",
        isMoney: false,
        link: "View all meeting stats",
      };
      break;
    case "earning":
      data = {
        title: "GUESTS",
        isMoney: true,
        link: "View net earnings",
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.title === "USERS"
            ? amount
            : data.title === "MEETINGS"
            ? amount2
            : data.title === "GUESTS"
            ? amount3
            : 0}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
