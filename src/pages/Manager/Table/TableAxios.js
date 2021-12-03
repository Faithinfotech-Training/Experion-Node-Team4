// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { withStyles, makeStyles } from "@material-ui/styles";
// // import Table from "@material-ui/styles/Table";
// // import TableBody from "@material-ui/styles/TableBody";
// // import TableCell from "@material-ui/styles/TableCell";
// // import TableContainer from "@material-ui/styles/TableContainer";
// // import TableHead from "@material-ui/styles/TableHead";
// // import TableRow from "@material-ui/styles/TableRow";
// // import Paper from "@material-ui/core/Paper";

// // const StyledTableCell = withStyles((theme) => ({
// //   head: {
// //     backgroundColor: theme.palette.common.black,
// //     color: theme.palette.common.white,
// //   },
// //   body: {
// //     fontSize: 14,
// //   },
// // }))(TableCell);

// // const StyledTableRow = withStyles((theme) => ({
// //   root: {
// //     "&:nth-of-type(odd)": {
// //       backgroundColor: theme.palette.action.hover,
// //     },
// //   },
// // }))(TableRow);

// // const useStyles = makeStyles({
// //   table: {
// //     minWidth: 700,
// //   },
// // });

// // const VisitTable = () => {
// //   const classes = useStyles();
// //   const [visit, setVisit] = useState([]);
// //   const [search, setSearch] = useState("");

// <<<<<<< HEAD
//   const getVisitData = async () => {
//     try {
//       const data = await axios.get(
//         "https://mocki.io/v1/09d3f919-7991-4a80-bdab-0143d0b6cb5c"
//       );
//       console.log(data.data);
//       setVisit(data.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getVisitData();
//   }, []);
//   return (
//     <div className="App">
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>No:</StyledTableCell>
//               <StyledTableCell align="left">
//                 User &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <input
//                   type="text"
//                   align="center"
//                   placeholder="Search here"
//                   onChange={(e) => {
//                     setSearch(e.target.value);
//                   }}
//                 />{" "}
//               </StyledTableCell>
//               <StyledTableCell align="left">Page</StyledTableCell>
//               <StyledTableCell align="left">Count</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {visit
//               .filter((item) => {
//                 if (search == "") {
//                   return item;
//                 } else if (
//                   item.name.toLowerCase().includes(search.toLowerCase())
//                 ) {
//                   return item;
//                 }
//               })
//               .map((item) => {
//                 return (
//                   <StyledTableRow key={item.id}>
//                     <StyledTableCell component="th" scope="row">
//                       {item.id}
//                     </StyledTableCell>
//                     <StyledTableCell align="left">{item.user}</StyledTableCell>
//                     <StyledTableCell align="left">{item.page}</StyledTableCell>
//                     <StyledTableCell align="left">{item.count}</StyledTableCell>
//                   </StyledTableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };
// =======
//   const getVisitData = async () => {
//     try {
//       const data = await axios.get(
//         "https://mocki.io/v1/09d3f919-7991-4a80-bdab-0143d0b6cb5c"
//       );
//       console.log(data.data);
//       setVisit(data.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getVisitData();
//   }, []);
//   return (
//     <div className="App">
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>No:</StyledTableCell>
//               <StyledTableCell align="left">
//                 User &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <input
//                   type="text"
//                   align="center"
//                   placeholder="Search here"
//                   onChange={(e) => {
//                     setSearch(e.target.value);
//                   }}
//                 />{" "}
//               </StyledTableCell>
//               <StyledTableCell align="left">Page</StyledTableCell>
//               <StyledTableCell align="left">Count</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {visit
//               .filter((item) => {
//                 if (search == "") {
//                   return item;
//                 } else if (
//                   item.name.toLowerCase().includes(search.toLowerCase())
//                 ) {
//                   return item;
//                 }
//               })
//               .map((item) => {
//                 return (
//                   <StyledTableRow key={item.id}>
//                     <StyledTableCell component="th" scope="row">
//                       {item.id}
//                     </StyledTableCell>
//                     <StyledTableCell align="left">{item.user}</StyledTableCell>
//                     <StyledTableCell align="left">{item.page}</StyledTableCell>
//                     <StyledTableCell align="left">{item.count}</StyledTableCell>
//                   </StyledTableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };
// >>>>>>> 8abda7e28f6b77a37f43544447005e560244a45b

// export default VisitTable;
