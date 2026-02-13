
import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Lightbulb, Users, Zap, Target, Briefcase, Rocket, Award, Globe } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

// service datas
const servicesList = [
  { 
    icon: <Lightbulb />, title: "Strategic Consulting", 
    desc: "Business strategy & growth planning.", 
    points: ["Strategy", "Market Analysis"],
    colorClass: "hover:border-blue-500 hover:shadow-blue-500/20",
    iconColor: "text-blue-400",
    bgTint: "group-hover:bg-blue-500/5"
  },
  { 
       icon: <Users />, title: "Leadership Dev", 
      desc: "Executive coaching & team building.", 
    points: ["Coaching", "Culture"],
     colorClass: "hover:border-emerald-500 hover:shadow-emerald-500/20",
    iconColor: "text-emerald-400",
     bgTint: "group-hover:bg-emerald-500/5"
  },
  { 
    icon: <Zap />, title: "Digital Transform", 
    desc: "Digital strategy & implementation.", 
    points: ["Tech Strategy", "Optimization"],
    colorClass: "hover:border-violet-500 hover:shadow-violet-500/20",
    iconColor: "text-violet-400",
    bgTint: "group-hover:bg-violet-500/5"
  },
  { 
    icon: <Target />, title: "M&A Advisory", 
    desc: "Mergers, acquisitions & partnerships.", 
    points: ["Due Diligence", "Structuring"],
    colorClass: "hover:border-amber-500 hover:shadow-amber-500/20",
    iconColor: "text-amber-400",
    bgTint: "group-hover:bg-amber-500/5"
  },
  { 
    icon: <Briefcase />, title: "Venture Capital", 
    desc: "Funding & expertise for startups.", 
    points: ["Seed Funding", "Mentorship"],
    colorClass: "hover:border-rose-500 hover:shadow-rose-500/20",
    iconColor: "text-rose-400",
    bgTint: "group-hover:bg-rose-500/5"
  },
  { 
    icon: <Rocket />, title: "Innovation", 
    desc: "Fostering entrepreneurial culture.", 
    points: ["Labs", "Product Dev"],
    colorClass: "hover:border-cyan-500 hover:shadow-cyan-500/20",
    iconColor: "text-cyan-400",
    bgTint: "group-hover:bg-cyan-500/5"
  },
  { 
    icon: <Award />, title: "Speaking", 
    desc: "Keynotes & excellence workshops.", 
    points: ["Keynotes", "Masterclasses"],
    colorClass: "hover:border-fuchsia-500 hover:shadow-fuchsia-500/20",
    iconColor: "text-fuchsia-400",
    bgTint: "group-hover:bg-fuchsia-500/5"
  },
  { 
    icon: <Globe />, title: "Board Advisory", 
    desc: "Governance for growth companies.", 
    points: ["Governance", "Risk Mgmt"],
    colorClass: "hover:border-lime-500 hover:shadow-lime-500/20",
    iconColor: "text-lime-400",
    bgTint: "group-hover:bg-lime-500/5"
  },
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="min-h-screen w-full bg-background flex flex-col justify-center py-12 sm:py-20 relative overflow-hidden"
    >
  
      <div className="absolute bottom-0 left-0 w-1/2 sm:w-1/3 h-1/3 bg-primary-start/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 h-full flex flex-col">
        

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 shrink-0"
        >
          <div className="inline-flex justify-center mb-2 bg-surface p-2 rounded-xl bg-gradient-to-br from-primary-start/20 to-primary-end/20 text-primary-start">
            <Briefcase size={20} />
          </div>
          <h2 className="text-3xl font-bold mb-1 text-gradient">Services & Expertise</h2>
          <p className="text-gray-400 text-sm">Delivering transformative solutions.</p>
        </motion.div>

          {/* Services Grid */} 
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grow min-h-0"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants} 
              className={`
                group relative bg-surface p-5 rounded-2xl border border-white/5 
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                flex flex-col h-full justify-between
                ${service.colorClass} ${service.bgTint}
              `}
            >
                <div>
                  <div className={`p-2 sm:p-3 rounded-xl bg-surface/50 w-fit mb-3 ${service.iconColor} transition-colors`}>
                    {React.cloneElement(service.icon, { size: 22 })}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-xs leading-relaxed mb-3">{service.desc}</p>
                </div>
              
              <ul className="space-y-1">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-center text-[11px] sm:text-[10px] text-gray-500 uppercase tracking-wide font-medium">
                    <div className={`w-2 h-2 rounded-full mr-2 ${service.iconColor.replace('text-', 'bg-')}`}></div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.5 }} 
          className="mt-6 shrink-0"
        >
           <div className="rounded-2xl bg-gradient-to-r from-surface to-surface-hover border border-white/5 p-4 flex flex-col md:flex-row items-center justify-between gap-4 hover:border-primary-start/30 transition-colors">
              <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-white">Ready to Scale?</h3>
                  <p className="text-gray-400 text-xs">Let's discuss your strategic goals.</p>
              </div>
              <ScrollLink to="contact" smooth={true} offset={-70} className="bg-gradient-to-r-theme text-white text-sm font-bold py-2 px-6 rounded-full hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap">
                Schedule Call
              </ScrollLink>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;