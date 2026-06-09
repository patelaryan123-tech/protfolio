'use client';

import { motion } from 'framer-motion';
import { stats } from '@/constants';
import { Rocket, Code, Zap, Heart } from 'lucide-react';

const iconMap: any = {
  rocket: Rocket,
  code: Code,
  bolt: Zap,
  heart: Heart,
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-neon-purple font-bold uppercase tracking-[4px] text-[14px]">About Me</p>
            <h2 className="text-white font-black md:text-[54px] sm:text-[44px] text-[34px] leading-tight mt-2">
              Full Stack Developer, Machine Learning Engineer...
            </h2>
            <p className="mt-6 text-slate-400 text-[16px] leading-[28px] max-w-2xl">
              Full Stack Developer, Machine Learning Engineer, and Software Engineer with hands-on experience in React.js, Node.js, Python, SQL, MongoDB, Machine Learning, and AI-powered applications. Strong understanding of Data Structures & Algorithms, problem solving, scalable web application development, NLP, deep learning, and end-to-end software engineering.
            </p>
          </motion.div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Rocket;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, borderColor: '#915eff' }}
                className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 group-hover:bg-neon-purple/20 transition-colors">
                  <Icon className="text-neon-purple w-8 h-8" />
                </div>
                <h3 className="text-white text-[32px] font-bold">{stat.value}</h3>
                <p className="text-slate-400 text-[14px] mt-2 font-medium leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
