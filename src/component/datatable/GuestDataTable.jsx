import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { guestColumns } from "../../datatablesource";
import { useEffect, useState } from "react";
import axios from "axios";

const GuestDataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/guestData")
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
        columns={guestColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={getRowId}
      />
    </div>
  );
};

export default GuestDataTable;
