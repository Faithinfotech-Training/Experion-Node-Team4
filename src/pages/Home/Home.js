import { Card, Row, Col, Button, Container, CardGroup } from "react-bootstrap";

import './Home.css';

import ControlledCarousel from "../../Components/Carousel/ControlledCarousel";

function Home() {


    return (
        <>
            <ControlledCarousel />
            <Container>
                <Row>
                    <Col>
                        <CardGroup>
                            <Card className="custom-Card">
                                <Card.Body>
                                    <Card.Title>Courses</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="/home/offered-courses">View offered courses</Card.Link>
                                    <Card.Link href="/home/course-enquiry">Enquire</Card.Link>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>

                    <Col>
                        <CardGroup>
                            <Card className="custom-Card">
                                <Card.Body>
                                    <Card.Title>Resources</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="/home/offered-resources">View offered resources</Card.Link>
                                    <Card.Link href="/home/resource-enquiry" >Enquire</Card.Link>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default Home;