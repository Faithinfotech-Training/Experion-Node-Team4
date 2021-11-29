import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";

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
      id: "Leanne Graham",
      Visit: "Sincere@april.biz",
      age: 28,
      status: "Active",
    },
    {
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      age: 35,
      status: "Active",
    },
    {
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      age: 33,
      status: "Inactive",
    },
    {
      name: "Patricia Lebsack",
      email: "Julianne@kory.org",
      age: 25,
      status: "Active",
    },
    {
      name: "Kamren",
      email: "Hettinger@annie.ca",
      age: 42,
      status: "Active",
    },
    {
      name: "Dennis Schulist",
      email: "Dach@jasper.info",
      age: 34,
      status: "Inactive",
    },
    {
      name: "Kurtis Weissnat",
      email: "Hoeger@billy.biz",
      age: 44,
      status: "Active",
    },
    {
      name: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      age: 26,
      status: "Active",
    },
    {
      name: "Glenna Reichert",
      email: "McDermott@dana.io",
      age: 30,
      status: "Inactive",
    },
  ];

  const columns = [
    {
      Header: "Name",
      accessor: "id",
    },
    {
      Header: "Email",
      accessor: "Visit",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Status",
      accessor: "status",
    },
  ];

  return (
    <Styles>
      <Table data={data} columns={columns} />
    </Styles>
  );
}

export default Tables;
