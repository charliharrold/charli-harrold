import './Home.css';
import { useState, useEffect } from 'react';
import CharliHarrold from '../assets/charli-photo.jpg'
import { Col, Row, Container } from 'react-bootstrap';

const Home = () => {
    const [floatingIndex, setFloatingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFloatingIndex((prev) => (prev + 1) % 3);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container py-5">
            <br /><br /><br />
            <Container>
                <Row className="align-items-center justify-content-center min-vh-75">
                    {/* Left side - Photo */}
                    <Col xs={12} md={6} lg={5} className="text-center mb-4 mb-md-0">
                        <div className="relative inline-block group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" 
                                 style={{ filter: 'blur(40px)' }} />
                            <div className="relative rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-300 mx-auto" 
                                 style={{ width: '280px', height: '280px' }}>
                                <img
                                    src={CharliHarrold}
                                    alt="Charli Harrold"
                                    className="w-full h-full object-cover"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </Col>

                    {/* Right side - Info */}
                    <Col xs={12} md={6} lg={7}>
                        <div className="text-center text-md-start">
                            <h1 className="mb-3" style={{ 
                                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                background: 'black',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                Charli Harrold
                            </h1>
                            <p className="mb-4" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'black' }}>
                                Computer Science + Math Honours Student @ UVic
                            </p>

                            {/* Floating badges */}
                            <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center justify-content-md-start">
                                {['Software Development', 'Equity and Inclusivity', 'Learning and Teaching'].map((badge, index) => (
                                    <span
                                        key={badge}
                                        className="px-3 py-2 rounded-pill border"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            fontSize: '0.875rem',
                                            transition: 'all 0.5s',
                                            transform: floatingIndex === index ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
                                            borderColor: floatingIndex === index ? 'rgba(139, 92, 246, 0.5)' : 'rgba(255, 255, 255, 0.2)',
                                            boxShadow: floatingIndex === index ? '0 8px 16px rgba(139, 92, 246, 0.3)' : 'none',
                                        }}
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            {/* Social icons */}
                            <div className="d-flex gap-3 mb-3 justify-content-center justify-content-md-start">
                                <a href="https://github.com/charliharrold" target="_blank" rel="noopener noreferrer" 
                                   className="p-3 rounded-circle"
                                   style={{
                                       backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                       backdropFilter: 'blur(10px)',
                                       transition: 'all 0.3s',
                                       display: 'inline-flex',
                                       alignItems: 'center',
                                       justifyContent: 'center'
                                   }}
                                   onMouseEnter={(e) => {
                                       e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                       e.currentTarget.style.transform = 'scale(1.1)';
                                   }}
                                   onMouseLeave={(e) => {
                                       e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                       e.currentTarget.style.transform = 'scale(1)';
                                   }}>
                                    <svg style={{ width: '32px', height: '32px', color: 'black' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/charli-harrold/" target="_blank" rel="noopener noreferrer"
                                   className="p-3 rounded-circle"
                                   style={{
                                       backdropFilter: 'blur(10px)',
                                       transition: 'all 0.3s',
                                       display: 'inline-flex',
                                       alignItems: 'center',
                                       justifyContent: 'center'
                                   }}
                                   onMouseEnter={(e) => {
                                       e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                                       e.currentTarget.style.transform = 'scale(1.1)';
                                   }}
                                   onMouseLeave={(e) => {
                                       e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                       e.currentTarget.style.transform = 'scale(1)';
                                   }}>
                                    <svg style={{ width: '32px', height: '32px', color: 'black' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Location */}
                            <div className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start" style={{ color: 'black' }}>
                                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Victoria, BC</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;