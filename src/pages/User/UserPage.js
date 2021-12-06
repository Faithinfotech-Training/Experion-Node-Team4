
import { Card, Row, Col, Container, CardGroup } from "react-bootstrap";

function UserPage() {


    return (
        <>
            <div style={{ height: "50vh" }}>
                <div>
                    <h3>Welcome!!</h3>
                </div>
                <Container >
                    <Row>
                        <Col>
                            <CardGroup>
                                <Card className="custom-Card">
                                    <Card.Body>
                                        <Card.Title>Courses</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Self-paced, Online/Offline</Card.Subtitle>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Praesent quis bibendum augue.
                                        </Card.Text>
                                        <Card.Link href="/home/offered-courses">View offered courses</Card.Link>
                                        <Card.Link href="/home/course-enquiry">Enquire</Card.Link>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Col>

                    </Row>

                </Container>
            </div>
        </>
    )
}

export default UserPage;