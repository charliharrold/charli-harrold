import './Home.css';
import CharliHarrold from '../assets/charli-photo.jpg'
import { Col, Row, Container, Image } from 'react-bootstrap';
import Arrow from '../assets/arrow-wave-left-down.png';
import Hashbrown from '../assets/hashbrown.jpg';

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
                <br/>
                <hr/>

                <h1>About</h1>
                <br/>

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

                <br/>
                <hr/>

                <h1>Work Experience</h1>
                <br/>

            </Container>
        </div>

    )
}

export default Home;