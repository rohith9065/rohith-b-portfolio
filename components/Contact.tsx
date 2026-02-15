
import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import SectionWrapper from './SectionWrapper';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Have a question or want to work together? Feel free to reach out!</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass p-8 rounded-3xl space-y-8">
            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
            
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Email Me</p>
                <p className="font-medium text-lg">rohith.b@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Call Me</p>
                <p className="font-medium text-lg">+91 00000 00000</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-medium text-lg">Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6">Social Networks</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form className="glass p-10 rounded-3xl space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Subject</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                placeholder="Collaboration Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button className="w-full bg-gradient-accent py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98]">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
