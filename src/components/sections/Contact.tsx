'use client';

import { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const EarthCanvas = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px]">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#915eff" intensity={1} />
        <Suspense fallback={null}>
          <Sphere args={[1, 64, 64]} scale={1.2}>
            <MeshDistortMaterial
              color="#915eff"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0}
              metalness={1}
            />
          </Sphere>
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

const ContactLink = ({ icon: Icon, label, value, href, isSvg }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ x: 10 }}
    className="flex items-center gap-6 group cursor-pointer"
  >
    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-neon-purple shadow-lg group-hover:border-neon-purple/50 group-hover:shadow-[0_0_15px_rgba(145,94,255,0.3)] transition-all">
      {isSvg ? (
        <div className="w-6 h-6">{Icon}</div>
      ) : (
        <Icon className="w-6 h-6" />
      )}
    </div>
    <div>
       <p className="text-slate-500 text-[14px]">{label}</p>
       <p className="text-white font-bold text-[18px] group-hover:text-neon-purple transition-colors">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
        {/* Left Side: Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <p className="text-neon-purple font-bold uppercase tracking-[4px] text-[14px]">Let's Connect</p>
          <h2 className="text-white font-black md:text-[54px] sm:text-[44px] text-[34px] leading-tight mt-2 mb-10">
            Contact Me
          </h2>

          <div className="flex flex-col gap-8">
            <ContactLink 
              icon={MapPin} 
              label="Location" 
              value="Himmatnagar, Gujarat" 
              href="https://www.google.com/maps/search/Himmatnagar,+Gujarat" 
            />
            
            <ContactLink 
              icon={Phone} 
              label="Phone" 
              value="+91 7567437695" 
              href="tel:+917567437695" 
            />

            <ContactLink 
              icon={Mail} 
              label="Email" 
              value="patelaryan4908@gmail.com" 
              href="mailto:patelaryan4908@gmail.com" 
            />

            <ContactLink 
              isSvg
              icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>} 
              label="LinkedIn" 
              value="linkedin.com/in/aryan-patel445576212" 
              href="https://www.linkedin.com/in/aryan-patel445576212" 
            />

            <ContactLink 
              isSvg
              icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>} 
              label="GitHub" 
              value="github.com/patelaryan123-tech" 
              href="https://github.com/patelaryan123-tech" 
            />
          </div>
        </motion.div>

        {/* Right Side: Form and Earth */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="bg-slate-950/20 border border-slate-800/50 p-6 sm:p-10 rounded-[30px] sm:rounded-[40px] glassmorphism relative overflow-hidden"
        >
           <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <input
                   type="text"
                   name="name"
                   placeholder="Your Name"
                   value={form.name}
                   onChange={handleChange}
                   className="bg-slate-900/50 border border-slate-800 py-4 px-6 rounded-2xl text-white outline-none focus:border-neon-purple transition-all"
                   required
                 />
                 <input
                   type="email"
                   name="email"
                   placeholder="Your Email"
                   value={form.email}
                   onChange={handleChange}
                   className="bg-slate-900/50 border border-slate-800 py-4 px-6 rounded-2xl text-white outline-none focus:border-neon-purple transition-all"
                   required
                 />
              </div>
              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="bg-slate-900/50 border border-slate-800 py-4 px-6 rounded-2xl text-white outline-none focus:border-neon-purple transition-all resize-none"
                required
              />
              <button
                type="submit"
                className="bg-neon-purple py-4 px-10 rounded-2xl text-white font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(145,94,255,0.4)]"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
           </form>

           <div className="absolute -bottom-20 -right-20 opacity-50 pointer-events-none">
              <EarthCanvas />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
