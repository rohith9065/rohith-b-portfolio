
import React from 'react';
import { EDUCATION, ACHIEVEMENTS, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, Trophy, CheckCircle2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Timeline: React.FC = () => {
  return (
    <SectionWrapper id="education" className="bg-white/[0.01]">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
            <GraduationCap className="text-blue-400" /> Education
          </h2>
          <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-white/10">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full glass border-2 border-blue-500/50 flex items-center justify-center z-10 group-hover:bg-blue-500 transition-colors">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <span className="text-blue-400 text-xs font-bold px-2 py-1 bg-blue-400/10 rounded mb-2 inline-block uppercase tracking-wider">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                  <p className="text-white font-mono text-sm">{edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Combined */}
        <div className="space-y-16">
          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <Trophy className="text-yellow-500" /> Achievements
            </h2>
            <div className="grid gap-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex-shrink-0 flex items-center justify-center text-yellow-500">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{ach.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <Award className="text-purple-400" /> Certifications
            </h2>
            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="glass px-6 py-4 rounded-xl flex justify-between items-center group hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 size={18} className="text-green-500" />
                    <div>
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-gray-500 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Timeline;
