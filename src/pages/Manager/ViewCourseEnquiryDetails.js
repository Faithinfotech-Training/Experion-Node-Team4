// import Dashboard from "../../Components/Dashboard/Dashboard";
import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ManagerViewCourseEnquiryDetails() {
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3009/course-enquiries/${id}`)
      .then((response) => {
        console.log(response.data);
        setInputs(response.data);
      });
  }, []);

  return (
    <>
      <ManagerDashboard />
      <h1>Course enquiry Details</h1>
      <h2>Enquirer name: {inputs.name}</h2>
      <h2>Enquirer email : {inputs.email}</h2>
      <h2>Enquired Course: {inputs.courseName}</h2>
    </>
  );
}

export default ManagerViewCourseEnquiryDetails;
