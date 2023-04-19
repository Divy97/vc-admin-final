import "./List.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import GuestDataTable from "../../component/datatable/GuestDataTable";

const GuestList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <GuestDataTable />
      </div>
    </div>
  );
};

export default GuestList;
