import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const VisitTable = () => {
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
        <thead>
          <tr>
            <th>No:</th>
            <th align="left">
              User
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                align="center"
                placeholder="Search here"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </th>
            <th align="left">Page</th>
            <th align="left">Count</th>
          </tr>
        </thead>
        <tbody>
          {visit
            .filter((item) => {
              if (search == "") {
                return item;
              } else if (item.user.includes(search)) {
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
