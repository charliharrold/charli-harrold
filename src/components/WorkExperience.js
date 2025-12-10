import Card from 'react-bootstrap/Card';
import pinkComputer from '../assets/pink-computer-transparent.png';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ONCLogo from '../assets/ONC-Logo.png';
import UVicLogo from '../assets/UVic-Logo.png';
import './WorkExperience.css'

const WorkExperience = () => {
    return (
        <div>
            <Container>
                <Card className='card-container'>
                    <Row>
                        <Col md={4}>
                            <Card.Img src={ONCLogo} />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Software Developer Co-op - Ocean Networks Canada</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <br/>
                <Card className='card-container-2'>
                    <Row>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Teaching Assistant - Computer Science Department</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col md={4}>
                            <Card.Img src={UVicLogo} />
                        </Col>
                    </Row>
                </Card>
                <br/>
            </Container>
        </div>
    )
}

export default WorkExperience;
