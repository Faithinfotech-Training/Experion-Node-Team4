import "./ViewCourse.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Dashboard from "../../../Components/Dashboard/Dashboard";
import { Table, Button } from "react-bootstrap";

function ViewCourse() {
    let [user, setUser] = useState(false);
    let [admin, setAdmin] = useState(false);

    const [courses, setCourses] = useState([]);
    const [coursesearch, setCourseSearch] = useState("");



    const navigate = useNavigate();


    const Users = () => {
        if (localStorage.getItem("role") === "User") {
            setUser(true);
        }
    };

    const Admins = () => {
        if (localStorage.getItem("role") === "Admin") {
            setAdmin(true);
        }
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
        Admins();
    }, []);

    return (
        <div>
            {admin && <Dashboard />}
            <div className="mainBody">
                <h1>Course List</h1>


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th align="left">Course Name
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
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {courses.filter((course) => {
                            if (coursesearch == "") {
                                return course;
                            } else if (course.coursename.includes(coursesearch)) {
                                return course;
                            }
                        })
                            .map((course) => {
                                return(
                                    // <div className="ULbox">
                                    <tr key={course.id}>
                                        <td>{course.coursecode}</td>
                                        <td>{course.coursename}</td>
                                        <td> {user ? (
                                            <Button variant="primary"
                                                onClick={() => {
                                                    navigate(`/user/view-courses/${course.id}`);
                                                }}
                                            >
                                                Click for details
                                            </Button>
                                        ) : (
                                            <div>
                                                <Link to={`${course.id}`}>View Course Details</Link>
                                            </div>
                                        )}</td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </Table>


            </div>
        </div>
    );
}

export default ViewCourse;
