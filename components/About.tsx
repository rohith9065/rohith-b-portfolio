
import React from 'react';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="w-full aspect-square max-w-md mx-auto relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-accent rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -inset-4 border-2 border-dashed border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden glass shadow-2xl">
              <img 
                src="https://picsum.photos/seed/rohith/500/500" 
                alt="Rohith B Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              I am a prefinal year <span className="text-white font-semibold">Computer Science Engineering</span> student at M Kumarasamy College of Engineering, passionate about creating high-impact digital experiences.
            </p>
            <p>
              My journey in tech began with curiosity about how complex systems work. Since then, I've developed a strong foundation in <span className="text-blue-400">Java, React, Node.js, and SQL</span>. I'm currently honing my skills in Data Structures and Algorithms to build more efficient applications.
            </p>
            <p>
              Beyond coding, I have experience working with <span className="text-purple-400">Linux/Unix</span> environments and am deeply interested in <span className="text-white font-semibold">Artificial Intelligence</span> and how it can be integrated into full-stack ecosystems.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="font-medium">Tamil Nadu, India</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Experience</p>
                <p className="font-medium">Fresher / Student</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Interests</p>
                <p className="font-medium">AI, Web, UI/UX</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Focus</p>
                <p className="font-medium">Full Stack Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
