import { useState, useEffect, useRef } from 'react';
import './Volunteering.css';
import { Col, Row, Image } from 'react-bootstrap';
import WECSLogo from '../assets/WECS-Logo.png';
import WISLogo from '../assets/WIS-Logo.webp';
import UvicLogo from '../assets/UVic-Logo.png';

const volunteerExperiences = [
  {
    company: "Women in Science",
    role: "Peer Mentorship Program Director",
    period: "January 2026 - Present",
    description: "Description.",
    logo: WISLogo
  },
  {
    company: "Women in Engineering and Computer Science",
    role: "VP Web Development",
    period: "January 2026 - August 2026",
    description: <p>●	Founded and lead the WECS Website Team responsible for the club website</p>,
    logo: WECSLogo
  },
  {
    company: "Women in Engineering and Computer Science",
    role: "Vice President",
    period: "April 2024 - December 2025",
    description: <p>●	Lead the equity initiatives by WECS including educational media content and a harassment and discrimination resources campaign <br />
      ●	Initiated the development of computer science-focused workshops, including a Website Development Workshop (JavaScript, React) and an Overcomplicated Calculator project demonstrating full-stack development (Python, Flask, JavaScript, React)
    </p>,
    logo: WECSLogo
  },
  {
    company: "Women in Engineering and Computer Science",
    role: "VP Academia",
    period: "October 2023 - April 2024",
    description: <p>●	Coordinated final exam review sessions for first-year engineering and computer science classes, managing 10+ volunteers each semester <br />
      ●	Personally delivered review sessions for introductory programming courses, attended by more than 40 students, and created all review session materials (Python)
    </p>,
    logo: WECSLogo
  },
  {
    company: "Women in Science",
    role: "Peer Mentor",
    period: "September 2023 - April 2024",
    description: "Description.",
    logo: WISLogo
  },
  {
    company: "University of Victoria",
    role: "Various",
    period: "",
    description: <p>
      Volunteer at science rendezvous (May 2026)
      Speaker at UVic's Faculty of Engineering and Computer Science event commemorating the
National Day of Remembrance and Action on Violence Against Women (December 2025)
      ECSS panelist for first year discipline panel (January 2025)
    </p>,
    logo: UvicLogo
  }
];

function VolunteerExperienceCard({ experience }) {
    return (

        <div className="border-3 border-black rounded-xl bg-[#fbcfe8bb] pl-2">

            <Row className="p-3">
                <Col xs={8}>
                    <div className="bg-[#FFFDEB] p-3 rounded-xl">
                        <p>
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
            <p style={{lineHeight: "1.75", fontSize: "1.1rem"}}>{experience.description}</p>
        </div>
    );
}

export default function VolunteerExperience() {

    const rows = [];
    for (let i = 0; i < volunteerExperiences.length; i += 2) {
        rows.push(volunteerExperiences.slice(i, i + 2));
    }

    return (
        <div>
            {rows.map((pair, index) => (
                <div>
                <Row key={index}>
                    {pair.map((exp, idx) => (
                        <Col md={6} key={idx}>
                            <VolunteerExperienceCard experience={exp} />
                        </Col>
                    ))}
                </Row>
                <br/>
                </div>
            ))}
        </div>
    );
}