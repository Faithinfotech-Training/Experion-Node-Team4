import { useState, useEffect } from "react";
import axios from "axios";

import { Card, Row, Col, Button, Container, CardGroup } from "react-bootstrap";
import './Home.css';

function OfferedResources() {

    const [resources, setResources] = useState([]);
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
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
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