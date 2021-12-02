import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Card, Row, Col, Button, Container, CardGroup, Collapse } from "react-bootstrap";
import './Home.css';

function OfferedResources() {

    let navigate = useNavigate();

    const [resources, setResources] = useState([]);
    const [open, setOpen] = useState(false);

    function enquireResource(resourcename) {
        navigate('/home/resource-enquiry/')

    }

    useEffect(() => {
        console.log('The use effect hook has been executed');

        axios
            .get('http://localhost:3009/resources')
            .then(response => {
                console.log('Promise fulfilled');
                console.log(response);
                //response object contains the complete HTTP REQUEST with
                //returned data, status code, and headers. We need only 'data'
                setResources(response.data);
            })

    }, [])

    return (
        <Container>
            {resources.map(resource =>
                <Row >

                    <Col>
                        <CardGroup>
                            <Card className="custom-Card">
                                <Card.Header as="h5">Resource</Card.Header>
                                <Card.Body>
                                    <Card.Title>{resource.resourcename}</Card.Title>
                                    <Card.Text>{resource.description}</Card.Text>
                                    <Button variant="primary" onClick={() => enquireResource(resource.resourcename)}>Enquire</Button>
                                    &nbsp;
                                    <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                                        View Details
                                    </Button>
                                    <br />
                                    <Collapse in={open}>
                                        <div id="example-collapse-text">
                                            <Card.Text>
                                                Resource Code :{resource.resourcecode} <br />
                                                Resource Name:{resource.resourcename}  <br />
                                                Resource Fee: {resource.resourcefee}   <br />
                                                Category: {resource.category}
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

export default OfferedResources;