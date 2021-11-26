import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function ResourceDetails() {
  //initialize the use case to empty
  const [staff, setStaff] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/staff/${id}`).then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      setStaff(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Details of {staff.first_name}</h1>
        <h2>First Name : {staff.first_name}</h2>
        <h2>Last Name : {staff.last_name}</h2>
        <h2>Email : {staff.email}</h2>
        <h2>Phone No : {staff.mobile_no}</h2>
        <a href="/stafflist">Back to Staff List</a>
      </div>
    </>
  );
}

export default ResourceDetails;
