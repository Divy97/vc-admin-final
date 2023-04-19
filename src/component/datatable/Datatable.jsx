import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUserID } from "../../context/userContext";

const Datatable = () => {
  const [data, setData] = useState([]);
  const { userId, setUserId } = useUserID();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/userData")
      .then(function (response) {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item._id !== id));
  };

  const handleView = (id) => {
    setUserId(id);
  };

  const deleteUser = (userId) => {
    console.log("delete");
    axios
      .delete(`http://localhost:3001/api/user/delete/${userId}`)
      .then((res) => {
        console.log(res.data);
        // Refresh the user list after deletion
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="viewButton"
                onClick={() => handleView(params.row._id)}
              >
                View
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => deleteUser(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  const getRowId = (row) => row._id;

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={getRowId}
      />
    </div>
  );
};

export default Datatable;
