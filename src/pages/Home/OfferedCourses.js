import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import { Card, Row, Col, Button, Container, CardGroup } from "react-bootstrap";
import './Home.css';

function OfferedCourses() {

    let navigate = useNavigate();
    const enquireCourse = () => {
        navigate('/home/course-enquiry')
      }

    const [courses, setCourses] = useState([]);

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
                                    <Card.Text>

                                    </Card.Text>
                                    <Button variant="primary" onClick={() => enquireCourse()}>Enquire</Button>
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