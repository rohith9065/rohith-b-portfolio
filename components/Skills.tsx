
import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Terminal, Database, Layout, Settings, Cpu, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const IconMap: Record<string, any> = {
  Code2, Terminal, Database, Layout, Settings, Cpu, Github
};

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category} className="glass p-8 rounded-3xl border border-white/5 h-full">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                {category === 'Languages' ? <Code2 size={18} /> : category === 'Web & Frameworks' ? <Layout size={18} /> : <Settings size={18} />}
              </span>
              {category}
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => {
                const Icon = IconMap[skill.icon] || Code2;
                return (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
                        <Icon size={14} className="text-gray-500" />
                        {skill.name}
                      </div>
                      <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-gradient-accent h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
