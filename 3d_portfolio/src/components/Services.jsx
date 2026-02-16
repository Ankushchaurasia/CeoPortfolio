import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Lightbulb, Users, Zap, Target, Briefcase, Rocket, Award, Globe } from 'lucide-react';
import { SectionHeader, Card } from './About';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

const servicesList = [
  {
    icon: <Lightbulb />,
    title: "Strategic Consulting",
    desc: "Business strategy & growth planning.",
    points: ["Strategy", "Market Analysis"],
    iconColor: "text-blue-400",
    hoverClass: "group-hover:border-blue-500 hover:border-blue-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] group-hover:bg-blue-500/6"
  },
  {
    icon: <Users />,
    title: "Leadership Dev",
    desc: "Executive coaching & team building.",
    points: ["Coaching", "Culture"],
    iconColor: "text-emerald-400",
    hoverClass: "group-hover:border-emerald-500 hover:border-emerald-500 hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] group-hover:bg-emerald-500/6"
  },
  {
    icon: <Zap />,
    title: "Digital Transform",
    desc: "Digital strategy & implementation.",
    points: ["Tech Strategy", "Optimization"],
    iconColor: "text-violet-400",
    hoverClass: "group-hover:border-violet-500 hover:border-violet-500 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)] group-hover:bg-violet-500/6"
  },
  {
    icon: <Target />,
    title: "M&A Advisory",
    desc: "Mergers, acquisitions & partnerships.",
    points: ["Due Diligence", "Structuring"],
    iconColor: "text-amber-400",
    hoverClass: "group-hover:border-amber-500 hover:border-amber-500 hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)] group-hover:bg-amber-500/6"
  },
  {
    icon: <Briefcase />,
    title: "Venture Capital",
    desc: "Funding & expertise for startups.",
    points: ["Seed Funding", "Mentorship"],
    iconColor: "text-rose-400",
    hoverClass: "group-hover:border-rose-500 hover:border-rose-500 hover:shadow-[0_8px_30px_rgba(244,63,94,0.12)] group-hover:bg-rose-500/6"
  },
  {
    icon: <Rocket />,
    title: "Innovation",
    desc: "Fostering entrepreneurial culture.",
    points: ["Labs", "Product Dev"],
    iconColor: "text-cyan-400",
    hoverClass: "group-hover:border-cyan-500 hover:border-cyan-500 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] group-hover:bg-cyan-500/6"
  },
  {
    icon: <Award />,
    title: "Speaking",
    desc: "Keynotes & excellence workshops.",
    points: ["Keynotes", "Masterclasses"],
    iconColor: "text-fuchsia-400",
    hoverClass: "group-hover:border-fuchsia-500 hover:border-fuchsia-500 hover:shadow-[0_8px_30px_rgba(236,72,153,0.12)] group-hover:bg-fuchsia-500/6"
  },
  {
    icon: <Globe />,
    title: "Board Advisory",
    desc: "Governance for growth companies.",
    points: ["Governance", "Risk Mgmt"],
    iconColor: "text-lime-400",
    hoverClass: "group-hover:border-lime-500 hover:border-lime-500 hover:shadow-[0_8px_30px_rgba(132,204,22,0.12)] group-hover:bg-lime-500/6"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-10 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Services & Expertise"
      subtitle="Delivering transformative solutions."
          badge={<Briefcase className="text-primary-start" />}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {servicesList.map((service, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card
                className={`group flex flex-col justify-between h-full cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${service.hoverClass}`}
              >
                <div>
                  <div className={`inline-flex items-center justify-center p-2 rounded-xl mb-3 bg-surface/10 w-fit transition-colors ${service.iconColor} group-hover:text-current`}>
                    {React.cloneElement(service.icon, { size: 20 })}
                  </div>
              <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{service.desc}</p>
                </div>

                <ul className="space-y-1 mt-3">
                  {service.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-500 uppercase tracking-wide font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${service.iconColor.replace('text-', 'bg-')}`} />
                      {pt}
                    </li>
            ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-8">
          <div className="rounded-2xl bg-gradient-to-r from-surface to-surface-hover border border-white/5 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-white mb-1">Ready to Scale?</h3>
              <p className="text-gray-400 text-xs">Let's discuss your strategic goals.</p>
            </div>
            <ScrollLink to="contact" smooth={true} offset={-70} className="bg-gradient-to-r-theme text-white text-sm font-bold py-2 px-5 rounded-full hover:opacity-90 transition-opacity cursor-pointer">
              Schedule Call
            </ScrollLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;