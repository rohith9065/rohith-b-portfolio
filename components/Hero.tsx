
import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer | AI Enthusiast";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="text-center z-10 max-w-4xl">
        <h2 className="text-blue-400 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
          Welcome to my portfolio
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6">
          Hi, I'm <span className="text-gradient">Rohith B</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-medium min-h-[2rem] mb-8">
          {text}<span className="animate-pulse">|</span>
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          Building scalable web applications and intelligent systems using modern technologies. 
          A prefinal year student passionate about solving real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a 
            href="#projects" 
            className="bg-gradient-accent px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <button className="glass px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:bg-white/10 active:scale-95 border border-white/20">
            Download Resume <Download size={18} />
          </button>
          <a 
            href="#contact" 
            className="text-gray-300 hover:text-white font-semibold flex items-center justify-center py-4"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
