import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Lightbulb, Globe, Award, Users, CheckCircle } from 'lucide-react';

// --- Animation Variants (copied locally for this component) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- Small local helpers (copied from App.jsx) ---
export const SectionHeader = ({ title, subtitle, badge }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <div className="flex justify-center mb-4">
        <div className="bg-surface p-3 rounded-2xl bg-gradient-to-br from-primary-start/20 to-primary-end/20">
            {badge}
        </div>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{title}</h2>
    <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
  </motion.div>
);

export const Card = ({ children, className = "" }) => (
  <motion.div
    variants={fadeInUp}
    className={`bg-surface p-8 rounded-3xl border border-white/5 hover:border-primary-start/30 transition-all duration-300 hover:-translate-y-1 ${className}`}
  >
    {children}
  </motion.div>
);

const About = () => {
  const highlights = [
    { icon: <Briefcase />, title: "Business Leader", desc: "Strategic executive with proven track record." },
    { icon: <Lightbulb />, title: "Thought Leader", desc: "Speaker and educator in business innovation." },
    { icon: <Globe />, title: "Global Impact", desc: "Operating across 25+ countries worldwide." },
    { icon: <Award />, title: "Award Winner", desc: "Recognized for excellence and innovation." },
  ];

  return (
    <section id="about" className="py-10 relative">
      <div className="container mx-auto px-6">
        <SectionHeader title="About Me" subtitle="Driving transformational change through visionary leadership." badge={<Users className="text-primary-start" />} />

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1"
          >
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-6 leading-relaxed">
              With over two decades of experience in executive leadership, I've dedicated my career to building transformative businesses that create lasting value. My journey has taken me across continents and industries, shaping my approach to sustainable growth.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8 leading-relaxed">
              I believe in the power of innovation combined with purpose. I lead organizations through pivotal transformations, empowering people and driving meaningful change.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              {['Excellence', 'Integrity', 'Innovation', 'Sustainability'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-surface border border-white/10 text-sm font-medium text-primary-start flex items-center gap-2">
                  <CheckCircle size={16} /> {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            {highlights.map((item, index) => (
              <Card key={index}>
                <div className="bg-gradient-to-br from-primary-start/20 to-primary-end/20 p-4 rounded-2xl inline-block mb-4 text-primary-end">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;