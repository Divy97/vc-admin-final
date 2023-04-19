import "./List.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Datatable from "../../component/datatable/Datatable";
import Login from "../login/Login";

const List = () => {
  let token = localStorage.getItem("regToken");

  if (!token) {
    window.location.href = "/login";
  }
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
