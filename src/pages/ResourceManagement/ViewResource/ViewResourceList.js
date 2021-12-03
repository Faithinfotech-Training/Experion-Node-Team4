import "./ViewCourse.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Dashboard from "../../../Components/Dashboard/Dashboard";
import { Table } from "react-bootstrap";

function ViewResourceList() {
    let [user, setUser] = useState(false);

    const [resources, setResources] = useState([]);



    const navigate = useNavigate();


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

        axios.get("http://localhost:3009/reosurces").then((response) => {
            console.log("Promise fulfilled");
            console.log(response);
            //response object contains the complete HTTP REQUEST with
            //returned data, status code, and headers. We need only 'data'
            setResources(response.data);
        });
        Users();
    }, []);

    return (
        <div>
            <Dashboard />
            <div className="mainBody">
                <h1>Resource List</h1>

               
                <Table striped bordered hover>
                        <tr>
                            <th>id</th>
                            <th>Resource Name</th>
                            <th>Details</th>
                            
                        </tr>

                        {resources.map((resource) => (
                            // <div className="ULbox">
                        <tr>
                            <td>{resource.resourcecode}</td>
                            <td>{resource.resoourcename}</td>
                            <td> {user ? (
                                    <button
                                        onClick={async () => {
                                            await updateVisitCount(resource.id);

                                            navigate(`/user/view-resources/${resource.id}`);
                                        }}
                                    >
                                        Click for details
                                    </button>
                                ) : (
                                    <div>
                                        <Link to={`${resource.id}`}>View Resource Details</Link>
                                    </div>
                                )}</td>
                        </tr>                            
                        ))}
                    </Table>
                

            </div>
        </div>
    );
}

export default ViewResourceList;
