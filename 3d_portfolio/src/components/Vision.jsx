
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, Lightbulb, Users, Award } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const Card = ({ children, className = "" }) => (
  <motion.div 
    variants={itemVariants} 
    className={`bg-surface p-6 md:p-8 rounded-3xl border border-white/5 hover:border-primary-start/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${className}`}
  >
    {children}
  </motion.div>
);

const Vision = () => {
  return (
    <section 
      id="vision" 

      className="min-h-screen py-10 bg-surface/30 flex flex-col justify-center relative overflow-hidden"
    >
       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-start/5 blur-[120px] rounded-full pointer-events-none"></div>

       <div className="container mx-auto px-6">
         
         <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
            className="flex flex-col gap-8"
         >
   {/* main heading */}
            <motion.div variants={itemVariants} className="text-center">
                <div className="inline-flex justify-center mb-3 bg-surface p-3 rounded-2xl bg-gradient-to-br from-primary-start/20 to-primary-end/20 text-primary-start">
                    <Target size={24}/>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gradient">Vision & Mission</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Building tomorrow's solutions with today's innovations.</p>
            </motion.div>
{/* for vision and mission cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-surface to-surface-hover">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-primary-start/20 text-primary-start"><Target size={28}/></div>
                        <h3 className="text-2xl font-bold text-white">Vision</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        To create a world where innovation meets purpose, empowering organizations to achieve sustainable growth while making a positive impact on society and the environment.
                    </p>
                </Card>

    {/* for mission card */}
                <Card className="bg-gradient-to-br from-surface to-surface-hover">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-primary-end/20 text-primary-end"><Rocket size={28}/></div>
                        <h3 className="text-2xl font-bold text-white">Mission</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        To lead transformative initiatives that bridge technology and human potential, fostering environments where creativity thrives and excellence becomes the standard.
                    </p>
                </Card>
            </div>

            <div>
                 <motion.h3 variants={itemVariants} className="text-xl font-bold text-center mb-6 text-white">Guiding Principles</motion.h3>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {[
                         { icon: <Lightbulb/>, title: "Innovation First", desc: "Embracing cutting-edge solutions." },
                         { icon: <Users/>, title: "People Matter", desc: "Fostering inclusive cultures." },
                         { icon: <Award/>, title: "Ethical Leadership", desc: "Leading with integrity always." }
                     ].map((item, idx) => (
                         <Card key={idx} className="text-center items-center justify-center">
                              <div className="bg-gradient-to-br from-primary-start/20 to-primary-end/20 p-4 rounded-full inline-block mb-3 text-primary-end">
                                {React.cloneElement(item.icon, { size: 24 })}
                              </div>
                             <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                             <p className="text-gray-400 text-sm">{item.desc}</p>
                         </Card>
                     ))}
                 </div>
            </div>

         </motion.div>
       </div>
    </section>
  );
};

export default Vision;