import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";

const Styles = styled.div`
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  // const [posts, setposts] = useState();
  // useEffect(() => {
  //   axios.get("localhost:3009/").then((res) => {
  //     console.log(res.data);
  //     setposts(res.data);
  //   });
  // }, []);
  // Render Data Table UI
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Tables() {
  const data = [
    {
      id: "1",
      name: "User 1",
      page: "Course Enquiry",
      count: "22",
    },
    {
      id: "2",
      name: "User 2",
      page: "Resource Enquiry",
      count: "3",
    },
    {
      id: "3",
      name: "User 3",
      page: "Course Enquiry",
      count: "32",
    },
    {
      id: "4",
      name: "User 4",
      page: "Resource Enquiry",
      count: "12",
    },
    {
      id: "5",
      name: "User 5",
      page: "View Courses",
      count: "4",
    },
    {
      id: "6",
      name: "User 6",
      page: "View Resource",
      count: "5",
    },
    {
      id: "7",
      name: "User 7",
      page: "Home",
      count: "7",
    },
    {
      id: "8",
      name: "User 8",
      page: "Course Enquiry",
      count: "4",
    },
  ];

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Page",
      accessor: "page",
    },
    {
      Header: "Count",
      accessor: "count",
    },
  ];

  return (
    <div className="tablebox">
      <h1>Table View</h1>
      <Styles>
        <Table data={data} columns={columns} />
      </Styles>
    </div>
  );
}

export default Tables;
