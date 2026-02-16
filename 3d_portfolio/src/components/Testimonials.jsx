

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Ankush from '../assets/ankush.jpeg';
import sidd from '../assets/sidd.jpeg';
import ritik from '../assets/ritik.jpeg';
import Neeraj from '../assets/Neeraj.jpeg';
import { SectionHeader, Card } from './About'; 

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

export default function Testimonials() {
  const testimonials = [
    { 
      quote: "Under the leadership guidance of the CEO, I contribute to building a performance-driven culture by implementing structured learning programs, professional development initiatives, and competency-based training models that empower individuals and strengthen organizational excellence.", 
      name: "Ritik Kumar", 
      role: "Training & Talent Development Executive", 
      image: ritik 
    },
     { 
      quote: "As a Program & Partnership Associate, working under the strategic guidance of the CEO, I support the execution of key initiatives and develop collaborative partnerships aligned with the organization’s long-term vision.", 
      name: "Neeraj",
      role: "Program & Partnership Associate", 
      image: Neeraj 
    },
    { 
      quote: "Under the guidance of executive leadership, I was exposed to a performance-driven work culture, strategic project planning, and cross-functional collaboration — shaping me into a more disciplined and solution-oriented professional.", 
      name: "Ankush Chaurasia", 
      role: "Graduate Engineer Trainee", 
      image: Ankush
    },
    { 
      quote: "Under the guidance of executive leadership, I was exposed to a performance-driven work culture, strategic project planning, and cross-functional collaboration — shaping me into a more disciplined and solution-oriented professional.", 
      name: "Siddharth Pathak", 
      role: "Graduate Engineer Trainee", 
      image: sidd 
    },
   
  ];

  return (
    <section id="testimonials" className="py-10 bg-surface/20 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-start/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <SectionHeader 
          title="What The Team Says" 
         subtitle="Building leaders and driving excellence from within the organization." 
          badge={<Quote className="text-primary-start" size={20} />} 
        />

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {testimonials.map((test, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="h-full">
              <Card className="relative flex flex-col h-full p-6 sm:p-8 overflow-hidden group hover:border-primary-start/40 hover:bg-surface/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                
              
          <Quote className="absolute -top-4 -left-4 text-white/5 w-32 h-32 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary-start/5" />
                
                <div className="relative z-10 flex flex-col h-full">
               *
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                    ))}
                  </div>
                  
             
               <p className="text-sm md:text-[15px] text-gray-300 italic mb-8 leading-relaxed flex-grow">
                    "{test.quote}"
                  </p>
                  
                
             <div className="flex items-center mt-auto pt-4 border-t border-white/10">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 mr-4 shrink-0">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-start to-primary-end animate-pulse opacity-50 blur-sm group-hover:opacity-100 transition-opacity"></div>
                      <img 
                        src={test.image} 
                        alt={test.name} 
                        className="relative w-full h-full rounded-full border-2 border-surface object-cover z-10" 
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base tracking-wide">{test.name}</h4>
                      <p className="text-xs text-primary-start/90 font-medium line-clamp-2">{test.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
       </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}