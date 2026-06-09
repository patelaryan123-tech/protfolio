'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/constants';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-full flex items-center py-4 fixed top-0 z-[100] transition-all duration-300 sm:px-16 px-6",
        scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50" : "bg-transparent"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('Home');
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-neon-purple flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(145,94,255,0.5)]">
               AP
            </div>
            <p className="text-white text-[18px] font-bold cursor-pointer uppercase tracking-wider hidden sm:block">
              Aryan Patel
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex flex-row items-center gap-8">
          <ul className="list-none flex flex-row gap-6">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`${
                  active === link.name ? 'text-neon-purple border-b-2 border-neon-purple' : 'text-slate-300'
                } hover:text-white text-[15px] font-medium cursor-pointer transition-all pb-1`}
                onClick={() => setActive(link.name)}
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-slate-700 pl-8">
             {/* Toggle Button */}
             <div 
               onClick={() => setIsDark(!isDark)}
               className={cn(
                 "w-12 h-6 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300 shadow-inner",
                 isDark ? "bg-slate-800" : "bg-neon-purple"
               )}
             >
                <motion.div 
                  layout
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  className="w-4 h-4 bg-white rounded-full shadow-lg"
                  animate={{ x: isDark ? 0 : 24 }}
                />
             </div>
             
             <a 
               href="/Aryan_Patel_Resume.html"
               download="Aryan_Patel_Resume.html"
               className="bg-[#0f172a] border border-slate-700 hover:border-neon-purple text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg"
             >
                Download Resume
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
             </a>
          </div>
        </div>

        <div className="lg:hidden flex flex-1 justify-end items-center gap-4">
          <button className="bg-slate-900 border border-slate-700 p-2 rounded-lg">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </button>

          <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
            {toggle ? <X className="text-white w-8 h-8" /> : <Menu className="text-white w-8 h-8" />}
          </div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-6 absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-[200] rounded-2xl glassmorphism bg-slate-950/95 flex-col gap-4 flex border border-slate-800"
              >
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.name}
                      className={cn(
                        "font-medium cursor-pointer text-[18px]",
                        active === link.name ? 'text-neon-purple' : 'text-slate-300'
                      )}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.name);
                      }}
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                  <li className="pt-4 border-t border-slate-800 w-full flex items-center justify-between">
                     <span className="text-slate-400 text-sm">Theme</span>
                     <div 
                        onClick={() => setIsDark(!isDark)}
                        className={cn(
                          "w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-colors",
                          isDark ? "bg-slate-800" : "bg-neon-purple"
                        )}
                      >
                        <motion.div 
                          layout
                          className="w-3 h-3 bg-white rounded-full"
                          animate={{ x: isDark ? 0 : 20 }}
                        />
                     </div>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
