
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import './AddResource.css'


function AddResource() {

  //Navigate back to admin/course
  let navigate = useNavigate();
  const goBack = () => {
    navigate('/admin/resource')
  }
  const goBacktoView = () => {
    navigate('/admin/resource/view-resources')
  }

  const [resources, setResource] = useState({})


  //handle the change of form elements
  function handleChange(event) {
    //saving the name of element and its value
    const name = event.target.name;
    const value = event.target.value;

    //updating the values into the state
    setResource(values => ({ ...values, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(resources);

    axios.post("http://localhost:3009/resources", resources)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

  }



  return (

    <div >
      <Dashboard />

      <Form onSubmit={handleSubmit} className="add-resource">
        
      <Form.Group className="mb-3" >
          <Form.Label>Resource Code</Form.Label>
          <Form.Control type="number" placeholder="Enter the code" name="resourcecode" value={resources.resourcecode || ""} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Resource Name</Form.Label>
          <Form.Control type="text" name="resourcename" placeholder="Enter the resource name" value={resources.resourcename || ""} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Resource Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" placeholder="Add a description" value={resources.description || ""} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Resource Fee in INR:</Form.Label>
          <Form.Control type="number" placeholder="Enter the Fee" name="resourcefee" value={resources.resourcefee || ""} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/> */}
          <label for="cars">Choose a category:</label>

          <Form.Select name="category" aria-label="Default select example" value={resources.category || ""} onChange={handleChange}>
            <option value="">--choose an option--</option>
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

//     <div>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Resource Name</Form.Label>
//           <Form.Control type="text" name="resourcename" placeholder="Enter the resource name" value={resources.resourcename || ""} onChange={handleChange} />
// {/* 
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

//         {/* <Form.Group className="mb-3" controlId="formBasicCheckbox"> */}
//           {/* Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/> */}
//           <label for="cars">Choose a category:</label>

//           {/* <Form.Select name="category" aria-label="Default select example" 
// defaultValue={resources.category || ""} onChange={handleChange}>
//             <option value="Web Dev">Web Dev</option>
//             <option value="ML">ML</option>
//             <option value="IOT">IOT</option>
//           </Form.Select> */}
//         {/* </Form.Group> */}
//         <Button variant="success" type="submit" onClick={() => goBacktoView()}>
//           Add
//         </Button>
//         &nbsp;&nbsp;&nbsp;
//         <Button variant="primary" type="reset" onClick={() => goBack()}>
//           Go Back
//         </Button>
//       </Form>
//     </div>
//   )
// }

export default AddResource;


















// import { Form, Button } from "react-bootstrap";
// import {useNavigate}  from 'react-router-dom';
// import {useState, useEffect } from "react";
// import axios from "axios";

// import './AddResource.css'


// function AddResource(){

//   let navigate = useNavigate();
//     const goBack = ()=>{
//       navigate('/admin/resource')
//     }


//     return(
//         <div>
//         <Form>
//   <Form.Group className="mb-3">
//     <Form.Label>Resource Name</Form.Label>
//      <Form.Control type="text"  placeholder="Enter the course name" />

//     <Form.Text className="text-muted">
//      Anything specific to Resource
//     </Form.Text>
//   </Form.Group>

//   <Form.Group className="mb-3" >
//     <Form.Label>Resource Code</Form.Label>
//     <Form.Control type="number" placeholder="Enter the code" />
//   </Form.Group>

//   <Form.Group className="mb-3" >
//     <Form.Label>Resource Fee in INR:</Form.Label>
//     <Form.Control type="number" placeholder="Enter the code" />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     Resource Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/>
//   </Form.Group>
//   <Button variant="success" type="submit">
//     Add Resource
//   </Button>
//   &nbsp;&nbsp;&nbsp;

//   <Button variant="primary" type="submit" onClick = {()=> goBack()}>
//     Go Back
//   </Button>
// </Form>
// </div>
//     )
// }

// export default AddResource;