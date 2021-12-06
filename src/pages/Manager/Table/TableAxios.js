import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Table.css";

const VisitTable = () => {
  const [coursevisit, setCourseVisit] = useState([]);
  const [resourcevisit, setResourceVisit] = useState([]);

  const [coursesearch, setCourseSearch] = useState("");
  const [resoursesearch, setResourseSearch] = useState("");

  const getCourseVisitData = async () => {
    try {
      const data = await // axios.get(
      //   "https://mocki.io/v1/09d3f919-7991-4a80-bdab-0143d0b6cb5c"
      // );
      axios.get("http://localhost:3009/courses");
      console.log(data.data);
      setCourseVisit(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getResourseVisitData = async () => {
    try {
      const data = await // axios.get(
      //   "https://mocki.io/v1/09d3f919-7991-4a80-bdab-0143d0b6cb5c"
      // );
      axios.get("http://localhost:3009/resources");
      console.log(data.data);
      setResourceVisit(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCourseVisitData();
    getResourseVisitData();
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
                      Course Name
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        align="center"
                        placeholder="Search here"
                        onChange={(e) => {
                          setCourseSearch(e.target.value);
                        }}
                      />
                    </th>
                    <th align="left">Course Code</th>
                    <th align="left">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {coursevisit
                    .filter((item) => {
                      if (coursesearch == "") {
                        return item;
                      } else if (item.coursename.includes(coursesearch)) {
                        return item;
                      }
                    })
                    .map((item) => {
                      return (
                        <tr key={item.id}>
                          <td component="th">{item.id}</td>
                          <td align="left">{item.coursename}</td>
                          <td align="left">{item.coursecode}</td>
                          <td align="left">{item.visit}</td>
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
                      Resource Name
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        align="center"
                        placeholder="Search here"
                        onChange={(e) => {
                          setResourseSearch(e.target.value);
                        }}
                      />
                    </th>
                    <th align="left">Resource Code</th>
                    <th align="left">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {resourcevisit
                    .filter((item) => {
                      if (resoursesearch == "") {
                        return item;
                      } else if (item.resourcename.includes(resoursesearch)) {
                        return item;
                      }
                    })
                    .map((item) => {            
                      return (
                        <tr key={item.id}>
                          <td component="th">{item.id}</td>
                          <td align="left">{item.resourcename}</td>
                          <td align="left">{item.resourcecode}</td>
                          <td align="left">{item.visit}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitTable;
