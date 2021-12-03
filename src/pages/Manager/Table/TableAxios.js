import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Table.css";

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
    <div className="tablebox">
      <div className="container-fluid ">
        {/* <h3 className={styles.headerText}>Dashboard</h3> */}
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              <h4>Course Visit</h4>

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
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
              <h4>Resource Visit</h4>

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
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default VisitTable;
