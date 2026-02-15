
import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent technical projects and explorations.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="glass-card rounded-3xl overflow-hidden flex flex-col group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md text-blue-300 text-[10px] font-bold uppercase rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  className="flex items-center gap-2 text-sm font-semibold hover:text-blue-400 transition-colors"
                >
                  <Github size={18} /> Source Code
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-sm font-semibold hover:text-purple-400 transition-colors"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
