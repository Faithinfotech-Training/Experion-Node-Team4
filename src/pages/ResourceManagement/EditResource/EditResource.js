////////////////////////////////////////////////
//
//        FOR TESTTING TOASTIFY
//
/////////////////////////////////////////////////////////

// import { Form, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Dashboard from "../../../Components/Dashboard/Dashboard";
// // import './EditCourse.css'

// import { toast, Slide } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const CustomToast = ({ closeToast }) => {
//   return (
//     <>
//       Are You Sure to Delete the Resources
//       <button onClick={closeToast}> Delete </button>
//     </>
//   );
// };

// function EditResource() {
//   const { id } = useParams();
//   return (
//     <>
//       <h1> Edit Resource </h1>
//       <MyForm id={id} />
//     </>
//   );
// }

// function MyForm(props) {
//   const[resourcecode,setresourcecode] =useState('');
//   const[resourcename,setresourcename]= useState('')
//   const[resourcefee,setresourcefee] = useState('');
//   const[category,setcategory] = useState('')

//   let navigate = useNavigate();
//   const goBack = () => {
//     navigate("/admin/resource");
//   };
//   const [resources, setResources] = useState({});
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3009/resources/${props.id}`)
//       .then((response) => {
//         console.log("promise was fulffiled");
//         console.log(response);
//         setResources(response.data);
//       });
//   }, []);
//   //handle the change of form elements

//   function handleChange(event) {
//     //saving the name of element and its value
//     const name = event.target.name;
//     const value = event.target.value;
//     // console.log(name)
//     // console.log(value
//     //updating the values into the state
//     setResources((values) => ({ ...values, [name]: value }));
//   }

//   function handleSubmit(e) {
//     // e.preventDefault();
//     console.log(resources);

//     axios
//       .put(`http://localhost:3009/resources/${props.id}`, 
//       {
//         resourcecode:resourcecode
//       })
//       .then((response) => {
//         console.log(response);
//         toast.success("Updated Successfully", {
//           transition: Slide,
//           hideProgressBar: true,
//           autoClose: 2000
//         })
//         navigate("/admin/resource/view-resources")
//        // window.location = "/admin/resource/view-resources";
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   return (
//     <>
//       <Dashboard />
//       {/* <button onClick={() => notify()}> Go Back </button> */}
//       <Form >
//         <Form.Group className="mb-3">
//           <Form.Label>Resource Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="resourcename"
//             placeholder="Enter the resource name"
           
//             onChange={(e)=>setresourcename(e.target.value)}
//           />
//           {/* 
//           <Form.Text className="text-muted">
//             Anything specific to course
//           </Form.Text> */}
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Resource Code</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Enter the code"
//             name="resourcecode"
//             onChange={(e)=>setresourcecode(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Resource Fee in INR:</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Enter the Fee"
//             name="resourcefee"
//             onChange={(e)=>setresourcefee(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           {/* Course Category: <Form.Check type="checkbox" label="Web Dev"  className="formCheckBox"/><Form.Check type="checkbox" label="IOT"  className="formCheckBox"/><Form.Check type="checkbox" label="ML"  className="formCheckBox"/> */}
//           <label for="cars">Choose a category:</label>

//           <Form.Select
//             name="category"
//             aria-label="Default select example"
//             onChange={(e)=>setcategory(e.target.value)}
//           >
//             <option value="Web Dev" key='web'>Web Dev</option>
//             <option value="ML" key="ML">ML</option>
//             <option value="IOT" key="IOT">IOT</option>
//           </Form.Select>
//         </Form.Group>
        
//       </Form>
//       <Button onClick={() => handleSubmit()} variant="success" type="submit">
//           Add
//         </Button>
//         &nbsp;&nbsp;&nbsp;
//         <Button variant="primary" type="reset" onClick={() => goBack()}>
//           Go Back
//         </Button>
        
//     </>
//   );
// }

// export default EditResource;

/////////////////////////////////////////////////////////////////////////
//                             Orginal Conetent                                  //////////
//                                                              ///////////
////////////////////////////////////////////////////////////////////////////

import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const mytoken = localStorage.getItem('mytoken');
  const goBack = () => {
    navigate('/admin/resource')
  }
  const [resources, setResources] = useState({})

  useEffect(() => {
    axios
     
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
    var data = resources;
    
    var config = {
      method: 'put',
      url: `http://localhost:3009/resources/${props.id}`,
      headers: { 
        'Authorization': `Bearer ${mytoken}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
     
      navigate("/admin/resource/view-resources")
  }

  return (
    <div>
      <Dashboard />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Resource Name</Form.Label>
          <Form.Control type="text" name="resourcename" placeholder="Enter the resource name" value={resources.resourcename || ""} onChange={handleChange} />
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

          <Form.Select name="category" aria-label="Default select example" defaultValue = {resources.category} value={resources.category || ""} onChange={handleChange}>
            <option value="Lab">Lab</option>
            <option value="Seminar Hall">Seminar Hall</option>
            <option value="Class Room">Class Room</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
        Edit
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="primary" type="reset" onClick={() => goBack()}>
          Go Back
        </Button>
      </Form>
    </div>
  )
}

export default EditResource;
