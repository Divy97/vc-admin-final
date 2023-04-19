import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, feedbackColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUserID } from "../../context/userContext";

const FeedDataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/userFeedback")
      .then(function (response) {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const actionColumn = [];
  const getRowId = (row) => row._id;

  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={feedbackColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={getRowId}
      />
    </div>
  );
};

export default FeedDataTable;
