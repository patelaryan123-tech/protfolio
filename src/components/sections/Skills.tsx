'use client';

import { motion } from 'framer-motion';
import { skills } from '@/constants';
import { Code, Globe, Server, Database, Terminal, Brain } from 'lucide-react';

const iconMap: any = {
  code: Code,
  globe: Globe,
  server: Server,
  database: Database,
  terminal: Terminal,
  brain: Brain,
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="text-neon-purple font-bold uppercase tracking-[4px] text-[14px]">Technical Skills</p>
        <div className="flex items-center justify-center gap-4 mt-4">
           <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-neon-purple" />
           <div className="w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_10px_#915eff]" />
           <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-neon-purple" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          const Icon = iconMap[skill.icon] || Code;
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: '#915eff' }}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-2xl group transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mb-6 border border-slate-700 group-hover:border-neon-purple/50 group-hover:shadow-[0_0_20px_rgba(145,94,255,0.2)] transition-all">
                  <Icon className="text-neon-purple w-8 h-8" />
                </div>
                <h3 className="text-white text-[20px] font-bold mb-6 tracking-wide underline decoration-neon-purple decoration-2 underline-offset-8">
                  {skill.title}
                </h3>
                <ul className="flex flex-col items-start gap-3 w-full">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-400 text-[15px] group/item hover:text-white transition-colors">
                       <div className="w-1.5 h-1.5 rounded-full bg-neon-purple shadow-[0_0_5px_#915eff]" />
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
