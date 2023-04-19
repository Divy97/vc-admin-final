import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Widget from "../../component/widget/Widget";
import Table from "../../component/table/Table";
import MeetingTable from "../../component/meetingTable/MeetingTable";
import Chart from "../../component/chart/Chart";
import Featured from "../../component/featured/Featured";
import "./Home.scss";
import MeetingDataTable from "../../component/meetingDataTable/MeetingDataTable";
const Home = () => {
  let token = localStorage.getItem("regToken");

  if (!token) {
    window.location.href = "/login";
  }
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="earning" />
          <Widget type="order" />
        </div>
        <div className="charts">
          {/* <Featured /> */}
          <Chart title="Last 3 Months Meeting statistics" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Meetings</div>
          <MeetingDataTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
