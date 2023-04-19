import "./List.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import FeedDataTable from "../../component/datatable/FeedDataTable";

const FeedList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <FeedDataTable />
      </div>
    </div>
  );
};

export default FeedList;
