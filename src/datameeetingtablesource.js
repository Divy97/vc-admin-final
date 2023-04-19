
// console.log(`${hours}:${minutes}:${seconds}`); // Output: 21:42:55
export const meetingColumns = [
  {
    field: "id", headerName: "ID", width: 70, renderCell: (params) => {
      return <div className="cellWithImg">{params.row._id}</div>;
    },
  },
  {
    field: "room",
    headerName: "Room Name",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.roomName}</div>;
    },
  },
  {
    field: "Host Name",
    headerName: "Host Name",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.hostName}</div>;
    },
  },

  {
    field: "Start Time",
    headerName: "Start Time",
    width: 100,
    renderCell: (params) => {
      const timestamp = params.row.startTime;
      const seconds = Math.floor(timestamp / 1000); // Convert nanoseconds to seconds
      const date = new Date(seconds * 1000); // Convert seconds to milliseconds
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const second = date.getSeconds().toString().padStart(2, '0');
      return <div className="cellWithImg">{params.row.startTime}</div>;
    },
  },
  {
    field: "End Time",
    headerName: "End Time",
    width: 100,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.endTime}</div>;
    },
  },
  {
    field: "Date",
    headerName: "Date",
    width: 100,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.date}</div>;
    },
  },
];

//temporary data
export const meetingRows = [
  {
    id: 1143155,
    roomName: "GLS-IMSCIT-Maths",
    hostName: "Vansh",
    startTime: "15:34:08",
    endTime: "16:30:22",
    date: "03/02/2023",
  },
  {
    id: 2235235,
    roomName: "GLS-BCA-Maths",
    hostName: "Vishwa",
    startTime: "11:00:08",
    endTime: "11:20:22",
    date: "05/02/2023",
  },
];
