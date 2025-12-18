import { useState, useEffect, useRef } from 'react';
import './Volunteering.css';
import ONCLogo from '../assets/ONC-Logo.png';
import UvicLogo from '../assets/UVic-Logo.png';

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
      company: "Women in Science",
      role: "Peer Mentorship Program Director",
      period: "January 2026 - Present",
      description: "Description.",
      skills: ["Communication", "Teaching", "Problem Solving"],
      logo: UvicLogo
    },
    {
      company: "Women in Engineering and Computer Science",
      role: "VP Web Development",
      period: "January 2026 - Present",
      description: "Description.",
      skills: ["React", "JavaScript", "Bitbucket", "Java"],
      logo: ONCLogo
    },
    {
      company: "Women in Engineering and Computer Science",
      role: "Vice President",
      period: "April 2024 - December 2025",
      description: "Description.",
      skills: ["React", "JavaScript", "Bitbucket", "Java"],
      logo: ONCLogo
    },
    {
      company: "Women in Engineering and Computer Science",
      role: "VP Academia",
      period: "October 2023 - April 2024",
      description: "Description.",
      skills: ["C#", "SQL", "HTML"],
      logo: UvicLogo
    },
    {
      company: "Women in Science",
      role: "Peer Mentor",
      period: "September 2023 - April 2024",
      description: "Description.",
      skills: ["Communication", "Mentoring", "Community Building"],
      logo: UvicLogo
    }
  ];

  return (
    <div className="volunteering-container min-h-screen bg-gradient-to-b from-[#e89a5b] to-[#da8d09]">

      {/* Experience Cards Section */}
      <section 
        ref={el => sectionsRef.current[0] = el}
        className="min-h-screen py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
            <br />
          <h2 className={`text-4xl md:text-5xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
            visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Volunteer Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {workExperiences.map((exp, idx) => (
              <div
                key={idx}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transition-all duration-700 hover:scale-105 hover:bg-white/20 ${
                  visibleSections.has(0) 
                    ? 'opacity-100 translate-x-0'
                    : idx % 2 === 0 ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-40 h-16 bg-gradient-to-br from-[#fd7e5f] to-[#f0d7a7] rounded-xl mb-6 flex items-center justify-center">
                  {/* <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg> */}
                  <img alt='Club Logo.' src={exp.logo} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                <p className="text-white font-semibold mb-2">{exp.company}</p>
                <p className="text-white text-sm mb-4">{exp.period}</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}