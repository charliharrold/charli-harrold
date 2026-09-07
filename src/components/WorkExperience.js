import './WorkExperience.css';
import ONCLogo from '../assets/ONC-Logo.png';
import UvicLogo from '../assets/UVic-Logo.png';
import { Col, Row, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function WorkExperience() {
    const workExperiences = [
        {
            company: "University of Victoria",
            role: "Teaching Assistant - CSC 226 (Algorithms and Data Structures II)",
            period: "January 2026 - Present",
            description: <p>●	Lead weekly labs
            </p>,
            skills: ["Communication", "Teaching", "Problem Solving"],
            logo: UvicLogo
        },
        {
            company: "University of Victoria",
            role: "Teaching Assistant - CSC 110 (Fundamentals of Programming I)",
            period: "September 2025 - December 2025",
            description: <p>●	Lead weekly labs for 30+ students demonstrating programming concepts, helping students with debugging, and conducting oral assessments <br />
                ●	Invigilate exams which involves verifying student IDs and monitoring for academic misconduct
            </p>,
            skills: ["Communication", "Teaching", "Problem Solving"],
            logo: UvicLogo
        },
        {
            company: "Ocean Networks Canada",
            role: "Software Developer Co-op",
            period: "September 2024 - April 2025",
            description: <p>●	Member of the New Features team, working to create new functionality within the Oceans 3.0 Dashboards <br />
                ●	Designed and implemented a new version of the Latest Readings widget by integrating multiple existing features and using new API services, improving functionality and bringing it more in line with existing dashboard widgets <br />
                ●	Refactored old code by converting components to functional TypeScript and writing comprehensive Cypress tests to ensure maintainability <br />
                ●	Updated API service calls to modernize code and improve speed
            </p>,
            skills: ["React", "JavaScript", "Bitbucket", "Java"],
            logo: ONCLogo
        },
        {
            company: "Database Assistant",
            role: "UVic Centre for Accessible Learning",
            period: "DATES",
            description: <p>●	Designed and built an automatic job with SQL and C# to identify exam scheduling conflicts and notify students, which runs daily on a production system handling thousands of students <br />
                ●	Wrote documentation of complex database scripts developed under tight timelines
            </p>,
            skills: ["C#", "SQL", "HTML"],
            logo: UvicLogo
        }
    ];

    return (
        <div>
            <Row>
                <Col md={6}>
                    <Card className="bg-gradient-to-b from-[#8168a9] via-[#8076c8] to-[#d77bb2]">
                        <Row>
                            <Col xs={8}>
                                <Card.Title className='text-2xl text-white'>{workExperiences[2].role}</Card.Title>
                                <Card.Subtitle className='text-2xl text-white mb-2'>{workExperiences[2].company}</Card.Subtitle>
                                <Card.Subtitle className='text-2xl text-white'>{workExperiences[2].period}</Card.Subtitle>
                            </Col>
                            <Col xs={4}>
                                <Image src={workExperiences[2].logo} />
                            </Col>
                        </Row>

                        <Row>
                            <Card.Body>{workExperiences[2].description}</Card.Body>
                        </Row>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}
