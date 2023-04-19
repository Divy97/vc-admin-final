import "./MList.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import MeetingDataTable from "../../component/meetingDataTable/MeetingDataTable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <MeetingDataTable />
      </div>
    </div>
  );
};

export default List;
