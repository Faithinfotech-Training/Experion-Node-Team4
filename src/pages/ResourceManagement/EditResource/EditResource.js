


////////////////////////////////////////////////
//
//        FOR TESTTING TOASTIFY
//
/////////////////////////////////////////////////////////


import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "../../../Components/Dashboard/Dashboard";
// import './EditCourse.css'


function EditResource() {
  const { id } = useParams()
  return (<>
    <h1> Edit Resource </h1>
    <MyForm id={id} />

  </>
  )
}
function MyForm(props) {
  let navigate = useNavigate();
  const goBack = () => {
    navigate('/admin/resource')
  }
  const [resources, setResources] = useState({})





  useEffect(() => {
    axios
      //    .get("http://localhost:3003/staff_list")

      //  .get(`http://localhost:3002/staff/${props.id}`) working JSon Seever
      .get(`http://localhost:3009/resources/${props.id}`)
      .then(response => {
        console.log("promise was fulffiled")
        console.log(response);
        setResources(response.data)
      })
  }, [])
  //handle the change of form elements
  function handleChange(event) {
    //saving the name of element and its value
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name)
    // console.log(value
    //updating the values into the state
    setResources(values => ({ ...values, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(resources);

    axios.put(`http://localhost:3009/resources/${props.id}`, resources)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    alert("user details updated")
    window.location = "/admin/resource/view-resources"
  }



  return (
    <div>
      <Dashboard />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Resource Name</Form.Label>
          <Form.Control type="text" name="resourcename" placeholder="Enter the resource name" value={resources.resourcename || ""} onChange={handleChange} />
          {/* 
          <Form.Text className="text-muted">
            Anything specific to course
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Resource Code</Form.Label>
          <Form.Control type="number" placeholder="Enter the code" name="resourcecode" value={resources.resourcecode || ""} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Resource Fee in INR:</Form.Label>
          <Form.Control type="number" placeholder="Enter the Fee" name="resourcefee" value={resources.resourcefee || ""} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/> */}
          <label for="cars">Choose a category:</label>

          <Form.Select name="category" aria-label="Default select example" value={resources.category || ""} onChange={handleChange}>
            <option value="Web Dev">Web Dev</option>
            <option value="ML">ML</option>
            <option value="IOT">IOT</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          Add
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="primary" type="reset" onClick={() => goBack()}>
          Go Back
        </Button>
      </Form>
    </div>
  )
}



export default EditResource;









































































































/////////////////////////////////////////////////////////////////////////
//                             Orginal Conetent                                  //////////
//                                                              ///////////
////////////////////////////////////////////////////////////////////////////



// import { Form, Button } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';
// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Dashboard from "../../../Components/Dashboard/Dashboard";
// // import './EditCourse.css'


// function EditResource() {
//   const { id } = useParams()
//   return (<>
//     <h1> Edit Resource </h1>
//     <MyForm id={id} />

//   </>
//   )
// }
// function MyForm(props) {
//   let navigate = useNavigate();
//   const goBack = () => {
//     navigate('/admin/resource')
//   }
//   const [resources, setResources] = useState({})





//   useEffect(() => {
//     axios
//       //    .get("http://localhost:3003/staff_list")

//       //  .get(`http://localhost:3002/staff/${props.id}`) working JSon Seever
//       .get(`http://localhost:3009/resources/${props.id}`)
//       .then(response => {
//         console.log("promise was fulffiled")
//         console.log(response);
//         setResources(response.data)
//       })
//   }, [])
//   //handle the change of form elements
//   function handleChange(event) {
//     //saving the name of element and its value
//     const name = event.target.name;
//     const value = event.target.value;
//     // console.log(name)
//     // console.log(value
//     //updating the values into the state
//     setResources(values => ({ ...values, [name]: value }))
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(resources);

//     axios.put(`http://localhost:3009/resources/${props.id}`, resources)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//     alert("user details updated")
//     window.location = "/admin/resource/view-resources"
//   }



//   return (
//     <div>
//       <Dashboard />
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Resource Name</Form.Label>
//           <Form.Control type="text" name="resourcename" placeholder="Enter the resource name" value={resources.resourcename || ""} onChange={handleChange} />
//           {/* 
//           <Form.Text className="text-muted">
//             Anything specific to course
//           </Form.Text> */}
//         </Form.Group>

//         <Form.Group className="mb-3" >
//           <Form.Label>Resource Code</Form.Label>
//           <Form.Control type="number" placeholder="Enter the code" name="resourcecode" value={resources.resourcecode || ""} onChange={handleChange} />
//         </Form.Group>

//         <Form.Group className="mb-3" >
//           <Form.Label>Resource Fee in INR:</Form.Label>
//           <Form.Control type="number" placeholder="Enter the Fee" name="resourcefee" value={resources.resourcefee || ""} onChange={handleChange} />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           {/* Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/> */}
//           <label for="cars">Choose a category:</label>

//           <Form.Select name="category" aria-label="Default select example" value={resources.category || ""} onChange={handleChange}>
//             <option value="Web Dev">Web Dev</option>
//             <option value="ML">ML</option>
//             <option value="IOT">IOT</option>
//           </Form.Select>
//         </Form.Group>
//         <Button variant="success" type="submit">
//           Add
//         </Button>&nbsp;&nbsp;&nbsp;
//         <Button variant="primary" type="reset" onClick={() => goBack()}>
//           Go Back
//         </Button>
//       </Form>
//     </div>
//   )
// }



// export default EditResource;