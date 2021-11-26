import { Form, Button } from "react-bootstrap";
import {useNavigate}  from 'react-router-dom';


function AddCourse(){

  let navigate = useNavigate();
    const goBack = ()=>{
      navigate('/admin/course')
    }

    return(
        <>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="success" type="submit">
    Add Course
  </Button>
  &nbsp;&nbsp;&nbsp;

  <Button variant="primary" type="submit" onClick = {()=> goBack()}>
    Go Back
  </Button>
</Form>
</>
    )
}

export default AddCourse;