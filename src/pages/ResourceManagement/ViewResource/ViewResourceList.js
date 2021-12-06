// import "./ViewCourse.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Dashboard from "../../../Components/Dashboard/Dashboard";
import { Table, Button } from "react-bootstrap";

function ViewResourceList() {
    let [user, setUser] = useState(false);
    const [admin, setAdmin] = useState(false);
    const Admins = () => {
        if (localStorage.getItem("role") === "Admin") {
            setAdmin(true);
        }
    };

    const [resources, setResources] = useState([]);
    const [resourcesearch, setResourceSearch] = useState("");



    const navigate = useNavigate();
    const goBack = () => {
        navigate('/admin')
    }



    const Users = () => {
        if (localStorage.getItem("role") === "User") {
            setUser(true);
        }
    };
    let inc = 0;
    const updateVisitCount = (id) => {
        axios.get(`http://localhost:3009/resources/${id}`).then((res) => {
            //   setCounter(response.data.visit + 1);
            console.log('initial visit', res.data.visit);
            let x = res.data.visit + 1;
            axios
                .put(`http://localhost:3009/resources/${id}`, { visit: x })
                .then((response) => {
                    console.log('Updated count', inc);
                });
        });
    };

    useEffect(() => {
        console.log("The use effect hook has been executed");

        axios.get("http://localhost:3009/resources").then((response) => {
            console.log("Promise fulfilled");
            console.log(response);
            //response object contains the complete HTTP REQUEST with
            //returned data, status code, and headers. We need only 'data'
            setResources(response.data);
        });
        Users();
        Admins();
    }, []);

    return (
        <div>
            {admin && <Dashboard />}
            <div className="mainBody">
                <h4>Resource List</h4>


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th align="left">Resource Name
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input
                                    type="text"
                                    align="center"
                                    placeholder="Search here"
                                    onChange={(e) => {
                                        setResourceSearch(e.target.value);
                                    }}
                                />
                            </th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {resources.filter((resource) => {
                            if (resourcesearch == "") {
                                return resource;
                            } else if (resource.resourcename.includes(resourcesearch)) {
                                return resource;
                            }
                        })
                            .map((resource) => {
                                return (
                                    // <div className="ULbox">
                                    <tr>
                                        <td>{resource.resourcecode}</td>
                                        <td>{resource.resourcename}</td>
                                        <td> {user ? (
                                            <Button variant="outline-primary"
                                                onClick={async () => {

                                                    navigate(`/user/view-resources/${resource.id}`);
                                                }}
                                            >
                                                Click for details
                                            </Button>
                                        ) : (
                                            <div>
                                                <Link to={`${resource.id}`}>View Resource Details</Link>
                                            </div>
                                        )}</td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </Table>

                <Button style={{ float: "right" }} variant="primary" type="reset" onClick={() => goBack()}>
                    Go Back
                </Button>
            </div>
        </div>
    );
}

export default ViewResourceList;
