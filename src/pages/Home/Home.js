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

                    <Col>
                        <CardGroup>
                            <Card className="custom-Card">
                                <Card.Body>
                                    <Card.Title>Resources</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Well equipped</Card.Subtitle>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Praesent quis bibendum augue.
                                    </Card.Text>
                                    <Card.Link href="/home/offered-resources">View offered resources</Card.Link>
                                    <Card.Link href="/home/resource-enquiry" >Enquire</Card.Link>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>

            </Container>
            <hr />
            <Container>
                <h4>Why Us?</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis bibendum augue. Maecenas ornare vehicula magna. Curabitur consequat et ex non mollis. Nam vitae nulla non tortor lobortis vestibulum nec sit amet purus. In finibus, risus vitae tristique luctus, nulla felis euismod quam, in faucibus nulla nibh pulvinar libero. Proin odio arcu, malesuada viverra ex at, suscipit volutpat velit. Ut sapien sem, efficitur efficitur lacus non, iaculis imperdiet mauris. Mauris ut nisi vitae orci vestibulum cursus non sed nisl. Nunc elementum, diam id mollis rhoncus, metus nibh ultrices magna, nec ultricies tellus leo vitae mauris. Duis scelerisque felis sed purus vestibulum, eu consectetur tortor congue. Nam ultricies lorem a scelerisque ultrices.
                </p>
                <p>
                    Aliquam sit amet ante ante. Nunc tortor nisl, lobortis vel sodales vitae, vehicula eu eros. Praesent quis pellentesque urna. In lacus erat, gravida a erat non, posuere varius enim. Phasellus vel suscipit libero, non ornare lacus. Etiam purus purus, rhoncus eu mauris vitae, tincidunt sagittis augue. Etiam mollis sodales lorem, nec lobortis eros feugiat a. Nulla scelerisque efficitur nunc sed semper.
                </p>
            </Container>
        </>
    )
}

export default Home;