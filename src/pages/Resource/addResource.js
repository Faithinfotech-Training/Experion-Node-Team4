import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function AddResource() {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    //to prevent default html form submit behaviour
    event.preventDefault();
    //alert the current state
    console.log(inputs);
    axios.post("http://localhost:3001/staff", inputs).then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      window.location = "/StaffList";
    });
  }

  return (
    <div className="container-fluid col-md-11">
      <h2 className="h3 text-black text-center bg-warning">Add Resource</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Enter Resource Name :</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            required
          />
        </div>

        {/* <div>
          <label> Resource Description :</label>
          <input
            classNameName="form-control"
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            required
          />
        </div> */}

        {/* <div>
          <label> Confirm your Password :</label>
          <input
            type="password"
            className="form-control"
            name="Cpassword"
            value={inputs.Cpassword || ""}
            onChange={handleChange}
            required
          />
        </div> */}

        <div>
          <label> Resource Type :</label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            value={inputs.first_name || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Resource Description :</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            value={inputs.last_name || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label> Resource Status :</label>
          <input
            type="text"
            className="form-control"
            name="mobile_no"
            value={inputs.mobile_no || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label> Date of Allocation :</label>
          <input
            className="form-control"
            type="date"
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input type="Submit" className="form-control btn btn-primary mt-3" />

          <input
            type="reset"
            className="form-control btn btn-danger mt-3"
            value="Cancel"
          />
        </div>
      </form>
    </div>
  );
}

export default AddResource;
