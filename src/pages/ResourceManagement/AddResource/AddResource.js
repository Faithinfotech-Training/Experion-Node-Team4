
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "../../../Components/Dashboard/Dashboard";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './AddResource.css'


function AddResource() {

  //Navigate back to admin/course
  let navigate = useNavigate();
  const viewResources = () => {
    navigate('/admin/resource/view-resources')
  }
  const goBack = () => {
    navigate('/admin')
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

    const mytoken = localStorage.getItem('mytoken');
    var config = {
      method: 'post',
      url: 'http://localhost:3009/resources',
      headers: {
        'Authorization': `Bearer ${mytoken}`,
        'Content-Type': 'application/json'
      },
      data: resources
    };

    axios(config)
      .then((response) => {
        console.log(response);
        toast.success("New resource Added Successfully", {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 3000
        })
        navigate("/admin/resource/view-resources")
      })
      .catch((error) => {
        toast.error("Resource already exists", {
          transition: Slide,
          hideProgressBar: true,
          autoClose: 3000
        })
      })

  }



  return (

    <div >
      <Dashboard />

      <Form onSubmit={handleSubmit} className="add-resource">

        <Form.Group className="mb-3" >
          <Form.Label>Resource Code :
            <span className="required">*</span>
          </Form.Label>
          <Form.Control type="number" min='100' required placeholder="Enter the code" name="resourcecode" value={resources.resourcecode || ""} onChange={handleChange} onInvalid={(e) => { e.target.setCustomValidity('Enter resource code, min 3 digits') }} onInput={(e) => { e.target.setCustomValidity('') }} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Resource Name :
            <span className="required">*</span>
          </Form.Label>
          <Form.Control type="text" required name="resourcename" placeholder="Enter the resource name" value={resources.resourcename || ""} onChange={handleChange} pattern="[A-Za-z]+\s{0,1}(([A-Za-z])+)*" onInvalid={(e) => { e.target.setCustomValidity('Enter a valid resource name') }} onInput={(e) => { e.target.setCustomValidity('') }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Resource Description :
            <span className="required">*</span>
          </Form.Label>
          <Form.Control as="textarea" rows={3} required name="description" placeholder="Add a description" value={resources.description || ""} onChange={handleChange} pattern="{5, }$" onInvalid={(e) => { e.target.setCustomValidity('Add atleast 5 characters') }} onInput={(e) => { e.target.setCustomValidity('') }} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Resource Fee in INR :
            <span className="required">*</span>
          </Form.Label>
          <Form.Control type="number" min='1000' required placeholder="Enter the Fee" name="resourcefee" value={resources.resourcefee || ""} onChange={handleChange} onInvalid={(e) => { e.target.setCustomValidity('Enter fee for the resource') }} onInput={(e) => { e.target.setCustomValidity('') }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label for="category">Choose a category:
            <span className="required">*</span>
          </Form.Label>

          <Form.Select name="category" aria-label="Default select example" value={resources.category || ""} onChange={handleChange} required onInvalid={(e) => { e.target.setCustomValidity('choose a category from the list') }} onInput={(e) => { e.target.setCustomValidity('') }}>
            <option value="">--choose an option--</option>
            <option value="Lab">Lab</option>
            <option value="Class Room">Class Room</option>
            <option value="Seminar Hall">Seminar Hall</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          Add
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="primary" type="reset" onClick={() => viewResources()}>
          View Resources
        </Button>
        <Button className="right" variant="primary" type="reset" onClick={() => goBack()}>
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