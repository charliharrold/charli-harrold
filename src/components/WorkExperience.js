import { useState, useEffect, useRef } from 'react';
import './WorkExperience.css';
import ONCLogo from '../assets/ONC-Logo.png';
import UvicLogo from '../assets/UVic-Logo.png';
import { Col, Row } from 'react-bootstrap';

export default function WorkExperience() {
    const [visibleSections, setVisibleSections] = useState(new Set());
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {

            // Check which sections are visible
            const windowHeight = window.innerHeight;
            const newVisible = new Set();

            sectionsRef.current.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
                        newVisible.add(index);
                    }
                }
            });

            setVisibleSections(newVisible);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const workExperiences = [
        {
            company: "University of Victoria",
            role: "Teaching Assistant",
            period: "September 2025 - Present",
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
        <div className="work-container min-h-screen bg-gradient-to-b from-[#8168a9] via-[#5543e1] to-[#f570c0]">
            {/* Hero Section with Parallax */}


            {/* Experience Cards Section */}
            <section
                ref={el => sectionsRef.current[0] = el}
                className="min-h-screen py-20 px-4"
            >
                <div className="max-w-6xl mx-auto">
                    <br />
                    <h2 className={`text-4xl md:text-5xl font-bold text-white text-center mb-16 transition-all duration-1000 ${visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                        Work Experience
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {workExperiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transition-all duration-700 hover:scale-105 hover:bg-white/20 ${visibleSections.has(0)
                                    ? 'opacity-100 translate-x-0'
                                    : idx % 2 === 0 ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
                                    }`}
                                style={{ transitionDelay: `${idx * 150}ms` }}
                            >
                                <Row>
                                    <Col>
                                        <div className=" rounded-xl mb-6 flex items-center justify-center">
                                            {/* <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg> */}
                                            <img alt="Company Logo." src={exp.logo} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                        <p className="text-white font-semibold mb-2">{exp.company}</p>
                                        <p className="text-white text-sm mb-4">{exp.period}</p>

                                    </Col>
                                </Row>
                                <Row>
                                    <p className="text-white mb-4">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, skillIdx) => (
                                            <span
                                                key={skillIdx}
                                                className="px-3 py-1 bg-blue-500/30 rounded-full text-xs text-white"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </Row>


                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}