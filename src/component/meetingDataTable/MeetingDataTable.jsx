import "./MeetingDataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { meetingColumns, meetingRows } from "../../datameeetingtablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MeetingDataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/meetingData")
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
        columns={meetingColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={getRowId}
      />
    </div>
  );
};

export default MeetingDataTable;
