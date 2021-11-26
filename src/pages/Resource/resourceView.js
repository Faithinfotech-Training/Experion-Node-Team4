import React from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
// import DeleteStaff from "./Staffdelete";

function Resourceview(props) {
  console.log(props);
  const navigate = useNavigate();
  const deleteStaff = (id) => {
    return axios
      .delete(`http://localhost:3001/staff/${id}`)
      .then((response) => console.log("Delete Successful"))
      .catch((error) => console.log("Error using delete operation"));
  };

  return (
    <>
      <h4>Resource Name: {props.details.first_name}</h4>
      <Link to={`/staffdetails/${props.details.id}`}>View Details</Link>
      <br />
      <br />
      <br />
      <button
        className="btnList btnA"
        onClick={() => deleteStaff(props.details.id)}
      >
        Delete Resource
      </button>
      <button
        className="btnList btnB"
        type="button"
        onClick={() => navigate(`/staffedit/${props.details.id}`)}
      >
        Edit Resource
      </button>
    </>
  );
}
export default Resourceview;
