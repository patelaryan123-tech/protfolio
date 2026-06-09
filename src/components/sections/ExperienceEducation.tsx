'use client';

import { motion } from 'framer-motion';
import { experiences, education } from '@/constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ title, subtitle, date, description, points }: any) => (
  <div className="relative pl-8 pb-12 last:pb-0">
    {/* Line */}
    <div className="absolute left-[11px] top-[30px] bottom-0 w-[2px] bg-slate-800" />
    {/* Dot */}
    <div className="absolute left-0 top-[6px] w-[24px] h-[24px] rounded-full bg-primary border-4 border-[#915eff] z-10 shadow-[0_0_10px_#915eff]" />
    
    <div>
      <h3 className="text-white font-bold text-[18px]">{title}</h3>
      <p className="text-neon-purple text-[14px] font-bold mt-1 tracking-tight">{subtitle}</p>
      {date && <p className="text-slate-500 text-[12px] mt-1 font-medium italic">{date}</p>}
      {description && <p className="text-slate-400 text-[14px] mt-3 leading-relaxed">{description}</p>}
      {points && (
        <ul className="mt-4 list-disc list-outside ml-4 flex flex-col gap-2">
          {points.map((point: any, index: number) => (
            <li key={index} className="text-slate-400 text-[13px] pl-1 leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const SectionColumn = ({ title, icon: Icon, children }: any) => (
  <div className="flex-1 w-full sm:min-w-[300px]">
    <div className="flex items-center gap-4 mb-10">
      <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20">
        <Icon className="text-neon-purple w-6 h-6" />
      </div>
      <h2 className="text-white text-[24px] font-bold tracking-tight uppercase">{title}</h2>
    </div>
    <div className="bg-slate-950/20 rounded-3xl border border-slate-800/50 p-6 sm:p-8 glassmorphism">
      {children}
    </div>
  </div>
);

const ExperienceEducation = () => {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-10">
        {/* Experience Column */}
        <div id="experience" className="flex-1 w-full">
          <SectionColumn title="Experience" icon={Briefcase}>
             {experiences.map((exp, index) => (
               <TimelineItem 
                 key={index}
                 title={exp.title}
                 subtitle={`${exp.company_name} | ${exp.date}`}
                 points={exp.points}
               />
             ))}
          </SectionColumn>
        </div>

        {/* Education Column */}
        <div id="education" className="flex-1 w-full">
          <SectionColumn title="Education" icon={GraduationCap}>
             {education.map((edu, index) => (
               <TimelineItem 
                 key={index}
                 title={edu.degree}
                 subtitle={edu.institution}
                 description={edu.description}
               />
             ))}
          </SectionColumn>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
