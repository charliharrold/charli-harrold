import './Home.css';
import CharliHarrold from '../assets/charli-photo.jpg'
import { Col, Row, Container, Image } from 'react-bootstrap';
import Hashbrown from '../assets/hashbrown.jpg';
import WorkExperience from './WorkExperience';
import VolunteerExperience from './Volunteering';
import Scholarship from './Scholarships';
import NavigationBar from './NavigationBar';

const Home = () => {

    return (
        <div class="bg-[#FFFDEB]">

            <Container>
                <NavigationBar />
                <Row>
                    <Col>
                        <div class="flex flex-col items-center w-full pt-24 border-5 border-black rounded-3xl bg-pink-200">
                            <div class="bg-[#FFFDEB] w-[90%] rounded-xl border-4 border-black flex justify-center md:py-10 mb-4 relative">
                                <h1 class="font-DelaGothicOne text-5xl md:text-7xl text-center">
                                    <span class="text-black">Charli Harrold</span>
                                </h1>
                            </div>

                            <div class="font-Archivo font-black flex flex-col justify-center items-center">
                                <p class="text-5xl md:text-4xl justify-center">Computer Science + Math Honours</p>
                                <p class="text-xl md:text-2xl justify-center">University of Victoria</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br />
                <hr />

                <h1 id="about" className='font-heading-style'>About Me</h1>
                <Row>
                    <Col xs={8}>
                        <p className="font-text-style">

                            I was born in Glasgow, Scotland and moved to Vancouver, Canada at age 13, then to Victoria in 2021.

                            I'm currently a fourth-year Computer Science and Math Honours student at the University of Victoria!
                            <br /><br />
                            My journey to computer science wasn't typical. I was dreading the one computer science course required for my physics + astronomy major, but at the end of my first
                            year it ended up being my favourite course! So, kind of on a whim, I transferred to computer science and I've loved it ever since!

                            <br /><br />
                            My interests are in discrete math and theoretical computer science. I'm particularly interested in parameterized complexity, combinatorial optimization, number theory, combinatorics,
                            linear programming, and approximation algorithms. I really just love learning!

                            <br /><br />

                            I am also extremely passionate about teaching and have loved being a Teaching Assistant in the Computer Science department
                            at UVic for the last year. I have held leadership positions in multiple clubs for women in STEM and participated in a directed studies course
                            where my final project focused on the causes of the underrepresentation of women in STEM!

                        </p>
                    </Col>

                    <Col xs={4}>
                        <figure>
                            <Image src={CharliHarrold} thumbnail />
                            <figcaption style={{ textAlign: "center" }} className="font-text-style">Taken in Königstein, Germany, 2024.</figcaption>
                        </figure>

                    </Col>
                </Row>

                <hr />

                <h1 id="work" className='font-heading-style'>Work Experience</h1>
                <br />
                <WorkExperience />
                <br />

                <hr />
                <h1 id="volunteer" className='font-heading-style'>Volunteer Experience</h1>
                <VolunteerExperience />

                <hr />
                <h1 id="scholarships" className='font-heading-style'>Scholarships</h1>
                <p className="font-text-style">I am so grateful for the scholarships I have received to support my education!</p>

                <Scholarship />

                <hr />
                <h1 id="proud" className='font-heading-style'>Things I'm Proud Of</h1>

                <p className="font-text-style">
                    PAPER FROM THE DIRECTED STUDIES COURSE <br />

                    SPEECH FROM NATIONAL DAY REMEMBRANCE VIOLENCE AGAINST WOMEN?

                </p>



            </Container>
        </div>

    )
}

export default Home;