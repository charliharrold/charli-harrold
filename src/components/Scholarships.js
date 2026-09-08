import './WorkExperience.css';
import UvicLogo from '../assets/UVic-Logo.png';
import { Col, Row, Image } from 'react-bootstrap';

const scholarshipList = [
    {
        company: "BC Scholarship Society",
        role: "BC Women in Technology Scholarship",
        period: "July 2026",
        description: <p>● The Society annually awards up to 15 scholarships valued at $10,000 to recognize women who are excelling in the study of Computer/Data Science, Physics, Engineering, or Mathematics <br/>
            ● My essay focused on the lack of diversity and responsibility in the computer science field. Particularly when technology influences politics, war, propaganda, and the environment. I advocated
            for the inclusion of ethics, societal awareness, and historical context in computer science education to ensure that the next generation of computer science graduates
            are better prepared for the ethical dilemmas they may face and can lead the charge in making STEM a more inclusive place.
        </p>,
        logo: ''
    },
    {
        company: "Zonta Victoria",
        role: "Women in STEM Award",
        period: "May 2026",
        description: <p>● The Zonta Women in STEM Award uplifts innovation and celebrates the remarkable accomplishments of women in science, technology, engineering and mathematics (STEM) fields and acknowledge their groundbreaking research, pioneering discoveries, and/or exemplary contributions to advancing knowledge and innovation in a STEM field. By recognizing and supporting these exceptional women, Zonta aims to inspire future generations and foster inclusivity and diversity in the world of STEM. 
        </p>,
        logo: ''
    },
    {
        company: "University of Victoria",
        role: "Woods Trust Scholarship",
        period: "August 2023",
        description: <p>● Automatically awarded to academically outstanding undergraduate students at the University of Victoria
        </p>,
        logo: UvicLogo
    },
    {
        company: "Province of British Columbia",
        role: "BC Achievement Scholarship",
        period: "November 2021",
        description: <p>● Awarded to the top 8,000 high school graduates in British Columbia
        </p>,
        logo: ''
    },
    {
        company: "Entrance Scholarship",
        role: "University of Victoria",
        period: "August 2021",
        description: <p>● Automatically awarded based on high school GPA
        </p>,
        logo: UvicLogo
    },
];

function ScholarshipCard({ experience }) {
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

export default function Scholarships() {

    const rows = [];
    for (let i = 0; i < scholarshipList.length; i += 2) {
        rows.push(scholarshipList.slice(i, i + 2));
    }

    return (
        <div>
            {rows.map((pair, index) => (
                <div>
                <Row key={index}>
                    {pair.map((exp, idx) => (
                        <Col md={6} key={idx}>
                            <ScholarshipCard experience={exp} />
                        </Col>
                    ))}
                </Row>
                <br/>
                </div>
            ))}
        </div>
    );
}

