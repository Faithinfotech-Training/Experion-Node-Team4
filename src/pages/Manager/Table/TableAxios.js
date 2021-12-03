import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import tbody from "@material-ui/core/tbody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import th from "@material-ui/core/th";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

// const td = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const tr = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

const VisitTable = () => {
  //   const classes = useStyles();
  const [visit, setVisit] = useState([]);
  const [search, setSearch] = useState("");

  const getVisitData = async () => {
    try {
      const data = await axios.get(
        "https://mocki.io/v1/09d3f919-7991-4a80-bdab-0143d0b6cb5c"
      );
      console.log(data.data);
      setVisit(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getVisitData();
  }, []);

  return (
    <div className="App">
      <Table striped bordered hover size="sm">
        <thead className="thead-dark">
          <tr>
            <td>No:</td>
            <td align="left">
              User &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                align="center"
                placeholder="Search here"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </td>
            <td align="left">Page</td>
            <td align="left">Count</td>
          </tr>
        </thead>
        <tbody>
          {visit
            .filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <tr key={item.id}>
                  <td component="th">{item.id}</td>
                  <td align="left">{item.user}</td>
                  <td align="left">{item.page}</td>
                  <td align="left">{item.count}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default VisitTable;
