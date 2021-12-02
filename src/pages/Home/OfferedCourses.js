import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import { Card, Row, Col, Button, Container, CardGroup, Collapse } from "react-bootstrap";
import './Home.css';

function OfferedCourses() {

    let navigate = useNavigate();
    
    const [open, setOpen] = useState(false);
    const [courses, setCourses] = useState([]);

    function enquireCourse(coursename) {
        navigate('/home/course-enquiry/')

    }
    
    useEffect(() => {
        console.log('The use effect hook has been executed');

        axios
            .get('http://localhost:3009/courses')
            .then(response => {
                console.log('Promise fulfilled');
                console.log(response);
                //response object contains the complete HTTP REQUEST with
                //returned data, status code, and headers. We need only 'data'
                setCourses(response.data);
            })

    }, [])


    return (
        <Container>
            {courses.map(course =>
                <Row >
                    <Col>
                        <CardGroup>
                            <Card className="custom-Card">
                                <Card.Header as="h5">Course</Card.Header>
                                <Card.Body>
                                    <Card.Title>{course.coursename}</Card.Title>
                                    <Card.Text>{course.description}</Card.Text>

                                    <Button variant="primary" onClick={() => enquireCourse(course.coursename)}>Enquire</Button>
                                    &nbsp;
                                    <Button onClick={() => setOpen(!open) } aria-controls="example-collapse-text" aria-expanded={open}>
                                        View Details
                                    </Button>
                                    <br/>
                                    <Collapse in={open}>
                                        <div id="example-collapse-text">
                                            <Card.Text>
                                                Course Code : {course.coursecode} <br />
                                                Course name: {course.coursename}  <br />
                                                Course Fee: {course.coursefee}    <br />
                                            </Card.Text>
                                        </div>
                                    </Collapse>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            )}
        </Container>
    )
}

export default OfferedCourses;