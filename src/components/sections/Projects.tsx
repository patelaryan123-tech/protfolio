'use client';

import { motion } from 'framer-motion';
import { projects } from '@/constants';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
      >
        <div>
          <p className="text-neon-purple font-bold uppercase tracking-[4px] text-[14px]">Featured Projects</p>
          <div className="flex items-center gap-4 mt-2">
             <h2 className="text-white font-black md:text-[54px] sm:text-[44px] text-[34px] leading-tight">
               Latest Works
             </h2>
             <div className="h-[2px] flex-1 min-w-[100px] bg-gradient-to-r from-neon-purple to-transparent hidden sm:block" />
          </div>
        </div>
        <a href="#" className="text-slate-400 hover:text-neon-purple transition-colors flex items-center gap-2 mb-2 font-medium group">
           View All Projects
           <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-[32px] overflow-hidden group hover:border-neon-purple/30 transition-all shadow-2xl"
          >
            <div className="relative h-[280px] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
               <div className="absolute top-6 right-6 z-20">
                  <span className="bg-slate-950/80 text-neon-purple border border-neon-purple/30 px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md">
                     {project.category}
                  </span>
               </div>
               
               {/* Project Image Placeholder */}
               <div className="w-full h-full bg-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                  <div className="relative w-4/5 h-3/5 bg-slate-800 rounded-xl border border-slate-700 shadow-2xl flex items-center justify-center p-4">
                     <div className="text-slate-600 font-bold text-center">
                        <div className="w-12 h-12 rounded-full bg-slate-700/50 mx-auto mb-4 flex items-center justify-center">
                           <GithubIcon className="w-6 h-6 text-slate-500" />
                        </div>
                        {project.name}
                     </div>
                  </div>
               </div>
            </div>

            <div className="p-6 sm:p-10">
              <div className="flex justify-between items-start">
                 <h3 className="text-white text-[26px] font-bold tracking-tight group-hover:text-neon-purple transition-colors">
                   {project.name}
                 </h3>
              </div>
              
              <p className="mt-4 text-slate-400 text-[16px] leading-[28px]">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag.name} className={`text-[12px] px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 font-medium ${tag.color}`}>
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800/50 flex gap-6">
                 <a href={project.source_code_link} target="_blank" rel="noreferrer"
                   className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-all font-semibold px-4 py-2 rounded-xl hover:bg-slate-800">
                    <GithubIcon className="w-5 h-5" />
                    GitHub
                 </a>
                 <a 
                   href={project.live_link} 
                   target="_blank"
                   rel="noreferrer"
                   className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-all font-semibold px-4 py-2 rounded-xl hover:bg-slate-800"
                 >
                    Live Demo
                    <ExternalLink className="w-5 h-5" />
                 </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
