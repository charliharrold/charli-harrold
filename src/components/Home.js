import './Home.css';
import CharliHarrold from '../assets/charli-photo.jpg'
import { Col, Row, Container, Image } from 'react-bootstrap';
import Arrow from '../assets/arrow-wave-left-down.png';
import Hashbrown from '../assets/hashbrown.jpg';
import WorkExperience from './WorkExperience';

const Home = () => {

    return (
        <div class="bg-[#FFFDEB]">

            <Container>
                <Row>
                    <Col>
                        <div class="flex flex-col items-center w-full pt-24 border-5 border-black rounded-3xl bg-pink-200">
                            <div class="bg-[#FFFDEB] w-[90%] rounded-xl border-4 border-black flex justify-center md:py-10 mb-4 relative">
                                <h1 class="font-DelaGothicOne text-5xl md:text-7xl text-center">
                                    <span class="text-black">Charli Harrold</span>
                                </h1>
                            </div>

                            <div class="font-Archivo font-black flex flex-col justify-center items-center">
                                <p class="text-5xl md:text-4xl">Computer Science + Math Honours</p>
                                <p class="text-xl md:text-2xl">University of Victoria</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br />
                <hr />

                <h1 className='font-heading-style'>About Me</h1>
                <Row>
                    <p className="font-text-style">
                        I'm currently a fourth-year Computer Science and Math Honours student at the University of Victoria.
                        <br />
                        My interests are in the intersection of math and computer science.
                        I enjoy graph theory, complexity theory, algorithms, abstract algebra, and number theory.
                        I find that my new favourite field or topic is whatever I most recently learned! Learning is my true passion, and with a dynamic field like computer science, continuous learning is at the heart of it all.
                    </p>
                </Row>
                <br />
                <Row>
                    <Col md={6} className="flex flex-col items-center">
                        <div className="scrap-photo scrap-photo--tape-me">
                            <Image src={CharliHarrold} thumbnail />
                        </div>

                        <div className="flex flex-row items-center mt-4">
                            <p className="scrap-label mt-2">(that's hashbrown!)</p>
                            <Image src={Arrow} className="w-40 -scale-x-100 -rotate-45" />
                        </div>
                    </Col>

                    <Col md={6} className="flex flex-col items-center">
                        <div className="flex flex-row items-center">
                            <Image src={Arrow} className="rotate-arrow" />
                            <p class="scrap-label mt-2">(that's me!)</p>

                        </div>

                        <div className="scrap-photo scrap-photo--tape-hashbrown">
                            <Image src={Hashbrown} thumbnail />
                        </div>

                    </Col>
                </Row>
                <br />
                <Row>
                    <div className="mb-20 rounded-3xl p-8 border border-black transition-all duration-300">
                        <h2 className='font-heading-style'>GitHub Activity</h2>
                        <p className="font-text-style">
                            My github chart! I've spent the last year working on a variety of projects!
                            I used to be very nervous about working on projects, I had no ideas and no clue where to start. Now I enjoy playing around with different projects!
                        </p>
                        <div className="rounded-lg overflow-hidden bg-white/5 p-4">
                            <Image
                                src="https://ghchart.rshah.org/charliharrold"
                            />
                        </div>
                    </div>
                </Row>

                <hr />

                <h1>Work Experience</h1>
                <WorkExperience />
                <br />

            </Container>
        </div>

    )
}

export default Home;