import { useState, useEffect, useRef } from 'react';

export default function Volunteering() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
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

  const parallaxOffset = scrollY * 0.5;
  const fadeOpacity = Math.max(0, 1 - scrollY / 500);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div 
          className="relative z-10 text-center px-4"
          style={{ opacity: fadeOpacity, transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Scroll Down
          </h1>
          <p className="text-xl md:text-2xl text-purple-200">
            Discover interactive experiences
          </p>
        </div>
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ opacity: fadeOpacity }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Cards Section */}
      <section 
        ref={el => sectionsRef.current[0] = el}
        className="min-h-screen py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
            visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured Content
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, idx) => (
              <div
                key={item}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 transition-all duration-700 hover:scale-105 hover:bg-white/20 ${
                  visibleSections.has(0) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{item}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Feature {item}</h3>
                <p className="text-purple-200">
                  Experience seamless interactions as you navigate through our innovative design.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section 
        ref={el => sectionsRef.current[1] = el}
        className="min-h-screen py-20 px-4 relative"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
            visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Visual Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className={`relative h-64 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl overflow-hidden transition-all duration-700 hover:scale-105 ${
                  visibleSections.has(1)
                    ? 'opacity-100 translate-x-0'
                    : idx % 2 === 0 ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{idx + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section 
        ref={el => sectionsRef.current[2] = el}
        className="min-h-screen py-20 px-4 flex items-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { number: '500+', label: 'Projects' },
              { number: '50K+', label: 'Users' },
              { number: '99%', label: 'Satisfaction' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`text-center transition-all duration-1000 ${
                  visibleSections.has(2)
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <div className="text-xl text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={el => sectionsRef.current[3] = el}
        className="min-h-screen py-20 px-4 flex items-center"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${
            visibleSections.has(3)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-200 mb-12">
              Join thousands of users experiencing the future of interactive design
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-110 transition-transform duration-300 shadow-2xl hover:shadow-purple-500/50">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
          style={{ width: `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` }}
        />
      </div>
    </div>
  );
}