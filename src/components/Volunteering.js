import { useState, useEffect, useRef } from 'react';
import './Volunteering.css';
import { Col, Row, Image } from 'react-bootstrap';
import WECSLogo from '../assets/WECS-Logo.png';
import WISLogo from '../assets/WIS-Logo.webp';
import UvicLogo from '../assets/UVic-Logo.png';

const volunteerExperiences = [
  {
    company: "UVic Women in Science",
    role: "Peer Mentorship Program Director",
    period: "January 2026 - Present",
    description: <p className="font-text-style">
      ● Oversee the Women in Science Peer Mentorship Program, matching junior students with upper-year
      mentors based on academic interests and goals, supporting 80+ students each year <br/>
      ● Lead a team of committee members to manage program logistics, communication, and participant support <br/>
      ● Plan and run community-building events and check-ins to strengthen mentor-mentee relationships
    </p>,
    logo: WISLogo
  },
  {
    company: "Women in Engineering and Computer Science",
    role: "VP Web Development",
    period: "January 2026 - August 2026",
    description: <p className="font-text-style">●	Founded and led the WECS Website Team responsible for the club website <br/>
      ● Planned new features, delegated tasks, and maintained the website using JavaScript, React, HTML, and CSS <br/>
      ● Assisted other students on the team, encouraging learning and skill development
    </p>,
    logo: WECSLogo
  },
  {
    company: "Women in Engineering and Computer Science",
    role: "Vice President",
    period: "April 2024 - December 2025",
    description: <p className="font-text-style">●	Led equity initiatives including educational social media content and workshops for executive members <br />
      ●	Initiated the development of computer science-focused workshops, including a Website Development Workshop (JavaScript, React) and an Overcomplicated Calculator project demonstrating full-stack development (Python, Flask, JavaScript, React)
    </p>,
    logo: WECSLogo
  },
  {
    company: "Women in Engineering and Computer Science",
    role: "VP Academia",
    period: "October 2023 - April 2024",
    description: <p className="font-text-style">●	Coordinated final exam review sessions for first-year engineering and computer science classes, managing 10+ volunteers each semester <br />
      ●	Personally delivered review sessions for introductory programming courses, attended by more than 40 students, and created all review session materials (Python)
    </p>,
    logo: WECSLogo
  },
  {
    company: "Women in Science",
    role: "Peer Mentor",
    period: "September 2023 - April 2024",
    description: <p className="font-text-style">
      ● Acted as a mentor for a first year Computer Science student new to UVic <br/>
      ● Answered questions and offered advice about the Computer Science program and various courses at UVic
    </p>,
    logo: WISLogo
  },
  {
    company: "University of Victoria",
    role: "Various One Time Events",
    period: "",
    description: <p className="font-text-style">
      ● Volunteer at science rendezvous, a fun day for kids interested in STEM (May 2026) <br/>
      ● Speaker at UVic's Faculty of Engineering and Computer Science event commemorating the
National Day of Remembrance and Action on Violence Against Women (December 2025) <br/>
      ● ECSS panelist for first year discipline panel which helps first year students decide which major to declare into (January 2025)
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