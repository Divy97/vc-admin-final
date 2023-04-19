import "./meetingtable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MList = () => {
  const rows = [
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
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Meeting ID</TableCell>
            <TableCell className="tableCell">Room Name</TableCell>
            <TableCell className="tableCell">Host Name</TableCell>
            <TableCell className="tableCell">Start Time</TableCell>
            <TableCell className="tableCell">End Time</TableCell>
            <TableCell className="tableCell">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.roomName}</TableCell>
              <TableCell className="tableCell">{row.hostName}</TableCell>
              <TableCell className="tableCell">{row.startTime}</TableCell>
              <TableCell className="tableCell">{row.endTime}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MList;
