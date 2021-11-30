
// function updateStatus(props) {

// const [inputs, setInputs] = useState({})


//     //handle the change of form elements
//     function handleChange(event) {
//         //saving the name of element and its value
//         const name = event.target.name;
//         const value = event.target.value;

//         //updating the values into the state
//         setInputs(values => ({ ...values, [name]: value }))
//     }

//     useEffect(() => {
//         axios
//             .get(`http://localhost:3009/resource-enquiries/${id}`)
//             .then((response) => {
//                 setInputs(response.data);
//                 console.log(response.data);
//             })
//     })
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(inputs);

//         axios.put(`http://localhost:3009/resource-enquiries/${id}`, inputs)
//             .then((response) => {
//                 console.log(response);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })

//     }



//     return (
//         <div>
//             <Dashboard />

//             <h1>Edit Status</h1>

//             <Form onSubmit={handleSubmit}>

//                 <Form.Group className="mb-3" >
//                     <Form.Label>Name : </Form.Label>
//                     <Form.Control type="text" placeholder="Enter your name" name="name" value={inputs.name || ""} onChange={handleChange} />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                     <Form.Label>Email : </Form.Label>
//                     <Form.Control type="email" placeholder="Enter your email id" name="email" value={inputs.email || ""} onChange={handleChange} />
//                 </Form.Group>

//                 <Form.Group className="mb-3" >
//                     <Form.Label>Resouce Name : </Form.Label>
//                     <Form.Control type="text" placeholder="Enter the resource name" name="resourceName" value={inputs.resourceName || ""} onChange={handleChange} />
//                 </Form.Group>

//                 <Form.Group className="mb-3" >
//                     <Form.Label>Requesting Date : </Form.Label>
//                     <Form.Control type="date" placeholder="Date from which you want to avail" name="reqDate" value={inputs.reqDate || ""} onChange={handleChange} />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicSelect">
//                     <label for="duration">Duration : </label>

//                     <Form.Select name="duration" aria-label="Default select example" value={inputs.duration} onChange={handleChange}>
//                         <option value="twoWeeks">Two Weeks</option>
//                         <option value="threeWeeks">Three Weeks</option>
//                         <option value="fourWeeks">Four Weeks</option>
//                     </Form.Select>
//                 </Form.Group>

//                 <Button variant="success" type="submit">
//                     Enquire
//                 </Button>&nbsp;&nbsp;&nbsp;
//                 <Button variant="primary" >
//                     Go Back
//                 </Button>
//             </Form>
//         </div>
//     )
// }

// export default updateStatus;