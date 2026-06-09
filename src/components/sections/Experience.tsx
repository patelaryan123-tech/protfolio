'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/constants';

const ExperienceCard = ({ experience }: any) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Icon/Circle */}
      <div className="absolute left-0 sm:left-24 w-10 h-10 rounded-full bg-[#1d1836] border-4 border-[#915eff] flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
      </div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="glassmorphism p-6 rounded-2xl"
      >
        <span className="text-[#915eff] font-bold text-[14px] uppercase tracking-wider">{experience.date}</span>
        <h3 className="text-white text-[24px] font-bold mt-1">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
        
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point: string, index: number) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-widest">What I have done so far</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[30px]">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 relative">
        {/* Timeline Line */}
        <div className="absolute left-5 sm:left-[116px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#915eff] via-[#915eff] to-transparent opacity-50" />
        
        <div className="flex flex-col gap-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
