import './WorkExperience.css';
import ONCLogo from '../assets/ONC-Logo.png';
import UvicLogo from '../assets/UVic-Logo.png';
import { Col, Row, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const workExperiences = [
    {
        company: "University of Victoria",
        role: "Teaching Assistant - CSC 226 (Algorithms and Data Structures II)",
        period: <p>September 2026 - Present <br /> January 2026 - April 2026</p>,
        description: <p>●	Led weekly theory-focused labs <br />
            ●	Graded research paper assignments and exams <br />
            ●	Topics include: divide-and-conquer algorithm design, advanced data structures, dynamic programming,
            greedy heuristic algorithms, maximum flow problems, hashing schemes, and introduction to the classes P and NP
        </p>,
        logo: UvicLogo
    },
    {
        company: "University of Victoria",
        role: "Teaching Assistant - CSC 320 (Foundations of Computer Science)",
        period: "May 2026 - August 2026",
        description: <p>●	Led weekly tutorials <br />
            ●	Graded assignments and exams <br />
            ●	Topics include: finite automata, Turing machines, undecidable problems, context-free
            languages, and computational complexity
        </p>,
        logo: UvicLogo
    },
    {
        company: "University of Victoria",
        role: "Teaching Assistant - CSC 110 (Fundamentals of Programming I)",
        period: "September 2025 - December 2025",
        description: <p>●	Lead weekly labs for 30+ students demonstrating programming concepts, helping students with debugging, and conducting oral assessments <br />
            ●	Invigilate exams which involves verifying student IDs and monitoring for academic misconduct <br />
            ●	Topics include: an introduction to designing, implementing, and understanding computer programs, an introduction to
            problem solving, selection and iteration, arrays and collections, objects and classes, top-down design, incremental development, and an introduction to testing
        </p>,
        logo: UvicLogo
    },
    {
        company: "Ocean Networks Canada",
        role: "Software Developer Co-op",
        period: "September 2024 - April 2025",
        description: <p>●	Member of the New Features team, working to create new functionality within the Oceans 3.0 Dashboards <br />
            ●	Designed and implemented a new version of the Latest Readings widget by integrating multiple existing features and using new API services, improving functionality and bringing it more in line with existing dashboard widgets <br />
            ●	Refactored old code by converting components to functional TypeScript and writing comprehensive Cypress tests to ensure maintainability <br />
            ●	Updated API service calls to modernize code and improve speed <br/>
            ●	React, JavaScript, Bitbucket, Java
        </p>,
        logo: ONCLogo
    },
    {
        company: "UVic Centre for Accessible Learning",
        role: "Database Assistant",
        period: "October 2022 - April 2024",
        description: <p>●	Designed and built an automatic job with SQL and C# to identify exam scheduling conflicts and notify students, which runs daily on a production system handling thousands of students <br />
            ●	Wrote documentation of complex database scripts developed under tight timelines <br/>
            ●	C#, SQL, HTML
        </p>,
        logo: UvicLogo
    }
];

function WorkExperienceCard({ experience }) {
    return (

        <div className="border-3 border-black rounded-xl bg-[#fbcfe8bb] pl-2">

            <Row className="p-3">
                <Col xs={8}>
                    <div className="bg-[#FFFDEB] p-3 rounded-xl">
                        <p className="font-text-style">
                            <div style={{fontSize: "1.1rem", fontWeight: "bold"}}>
                                {experience.role}
                            </div>
                            {experience.company} <br/>
                            {experience.period}
                        </p>
                    </div>
                </Col>
                <Col xs={4}>
                    <Image src={experience.logo} />
                </Col>

            </Row>
            <p className="font-text-style" style={{lineHeight: "1.75", fontSize: "1.1rem"}}>{experience.description}</p>
        </div>
    );
}

export default function WorkExperience() {

    const rows = [];
    for (let i = 0; i < workExperiences.length; i += 2) {
        rows.push(workExperiences.slice(i, i + 2));
    }

    return (
        <div>
            {rows.map((pair, index) => (
                <div>
                <Row key={index}>
                    {pair.map((exp, idx) => (
                        <Col md={6} key={idx}>
                            <WorkExperienceCard experience={exp} />
                        </Col>
                    ))}
                </Row>
                <br/>
                </div>
            ))}
        </div>
    );
}

