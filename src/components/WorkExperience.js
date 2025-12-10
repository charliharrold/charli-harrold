import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ONCLogo from '../assets/ONC-Logo.png';
import UVicLogo from '../assets/UVic-Logo.png';
import './WorkExperience.css'

const WorkExperience = () => {
    return (
        <div className='div-style'>
            <Container>
                <Card className='card-container red'>
                    <Row>
                        <Col md={4}>
                            <Card.Img src={UVicLogo} />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Teaching Assistant - Computer Science</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Col>

                    </Row>
                </Card>
                <br />
                <Card className='card-container blue'>
                    <Row>
                        <Col md={4}>
                            <Card.Img src={ONCLogo} style={{ maxHeight: '250px', objectFit: 'contain' }} />
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
                <br />

                <Card className='card-container yellow'>
                    <Row>
                        <Col md={4}>
                            <Card.Img src={UVicLogo} />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Database Assistant - Centre for Accessible Learning</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <br />
            </Container>
        </div>
    )
}

export default WorkExperience;
