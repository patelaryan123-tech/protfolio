'use client';

import { motion } from 'framer-motion';
import { HeroCanvas } from '../canvas/HeroCanvas';
import { socials } from '@/constants';
import { Mail, Code, Send } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const iconMap: any = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  code: Code,
};

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen mx-auto overflow-hidden bg-primary flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(145,94,255,0.15),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-center gap-10 py-20 lg:py-0 pt-[100px] lg:pt-[80px]">
        {/* Left Content */}
        <div className="flex-1 z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary text-[18px] font-medium tracking-wider">Hi, I'm</p>
            <h1 className="text-white font-black lg:text-[80px] sm:text-[60px] text-[40px] lg:leading-[98px] drop-shadow-[0_0_15px_rgba(145,94,255,0.5)] mt-2">
              Aryan Patel
            </h1>
            <div className="mt-4 flex flex-col gap-1">
               <p className="text-[#915eff] font-bold text-[24px] sm:text-[32px] tracking-tight">
                 Software Engineer | <span className="text-white">Full Stack Developer</span>
               </p>
               <p className="text-neon-blue font-bold text-[24px] sm:text-[32px] tracking-tight">
                 Machine Learning Engineer
               </p>
            </div>
            <p className="mt-6 text-secondary text-[16px] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I build intelligent, scalable, and user-centric applications with modern technologies and AI-powered solutions.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(145,94,255,0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-neon-purple to-[#7a49e0] py-4 px-10 rounded-xl text-white font-bold flex items-center gap-2 group transition-all"
              >
                View My Work
                <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </motion.a>
              
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(145,94,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-700 hover:border-neon-purple py-4 px-10 rounded-xl text-white font-bold flex items-center gap-2 transition-all"
              >
                Let's Connect
                <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </motion.a>
            </div>

            {/* Social Links from Screenshot */}
            <div className="mt-12 flex justify-center lg:justify-start gap-4">
               {socials.map((social) => {
                 const Icon = iconMap[social.icon] || Code;
                 return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, borderColor: '#915eff', color: '#915eff' }}
                    className="w-12 h-12 rounded-xl border border-slate-800 glassmorphism flex items-center justify-center text-slate-400 hover:shadow-[0_0_15px_rgba(145,94,255,0.2)] transition-all bg-slate-950/50"
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="w-5 h-5" />
                  </motion.a>
                 );
               })}
            </div>
          </motion.div>
        </div>

        {/* Right Content - 3D Laptop */}
        <div className="flex-1 w-full h-[350px] sm:h-[450px] lg:h-[600px] z-0 relative">
           <HeroCanvas />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center hidden sm:flex">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-slate-500 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-2 h-2 rounded-full bg-slate-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
