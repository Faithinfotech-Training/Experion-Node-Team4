import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const VisitTable = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProductData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="App">
      <h1>Site Visit View</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      {/* {product
        .filter((item) => {
          if (search == "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <p>
              {item.name} - {item.price}
            </p>
          );
        })} */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>User</StyledTableCell>
              <StyledTableCell>Page</StyledTableCell>
              <StyledTableCell align="right"> Count</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product
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
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.email}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.price}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VisitTable;

// import React, { Component } from "react";
// import axios from "axios";
// import ReactTable from "react-table";
// // import "react-table/react-table.css";

// export default class Visittable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       loading: true,
//     };
//   }
//   async getUsersData() {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//     console.log(res.data);
//     this.setState({ loading: false, users: res.data });
//   }
//   componentDidMount() {
//     this.getUsersData();
//   }
//   render() {
//     const columns = [
//       {
//         Header: "ID",
//         accessor: "id",
//       },
//       {
//         Header: "Name",
//         accessor: "name",
//       },

//       {
//         Header: "Username",
//         accessor: "username",
//       },
//       {
//         Header: "Phone",
//         accessor: "phone",
//       },
//       {
//         Header: "Email",
//         accessor: "email",
//       },
//       {
//         Header: "Website",
//         accessor: "website",
//       },
//     ];
//     return <ReactTable data={this.state.users} columns={columns} />;
//   }
// }
