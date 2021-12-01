import "./ViewCourse.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Dashboard from "../../../Components/Dashboard/Dashboard";

function ViewCourse() {
  let [user, setUser] = useState(false);

  const [courses, setCourses] = useState([]);

  const [count, setCounter] = useState(0);

  const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log("The use effect hook has been executed");

  //     var data = "";

  //     // var config = {
  //     //   method: "get",
  //     //   url: "http://localhost:3009/courses",

  //     //   data: data,
  //     // };

  //     axios.get.then((response) => {
  //       console.log("Promise fulfilled");
  //       console.log(response);
  //       //response object contains the complete HTTP REQUEST with
  //       //returned data, status code, and headers. We need only 'data'
  //       setCourses(response.data);
  //     });
  //   }, []);
  const Users = () => {
    if (localStorage.getItem("role") === "User") {
      setUser(true);
    }
  };

  const getVisitCount = (id) => {
    axios.get(`http://localhost:3009/courses/${id}`).then((response) => {
      setCounter(response.data.visit + 1);
      console.log(response.data.visit);
    });
  };
  const putVisitCount = (id) => {
    axios
      .put(`http://localhost:3009/courses/${id}`, { visit: count })
      .then((response) => {
        console.log(response.data);
      });
  };

  useEffect(() => {
    console.log("The use effect hook has been executed");

    axios.get("http://localhost:3009/courses").then((response) => {
      console.log("Promise fulfilled");
      console.log(response);
      //response object contains the complete HTTP REQUEST with
      //returned data, status code, and headers. We need only 'data'
      setCourses(response.data);
    });
    Users();
  }, []);

  return (
    <div>
      <Dashboard />
      <div className="mainBody">
        <h1>Course List</h1>
        <div className="mainBox">
          {courses.map((course) => (
            // <div key={staff.id} className="staffListLI">
            //     {/* <Staff details = {staff} /> */}
            // </div>
            <div className="ULbox">
              <div>Course code: {course.coursecode}</div>
              <div>Course name: {course.coursename}</div>
              {/* <div>
                  <Link to={`${course.id}`}>View Course Details</Link>
                </div> */}
              {user ? (
                <button
                  onClick={async () => {
                    // setCounter(count + 1);
                    await getVisitCount(course.id);
                    await putVisitCount(course.id);
                    navigate(`/user/view-courses/${course.id}`);
                  }}
                >
                  {count}
                </button>
              ) : (
                <div>
                  <Link to={`${course.id}`}>View Course Details</Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewCourse;
