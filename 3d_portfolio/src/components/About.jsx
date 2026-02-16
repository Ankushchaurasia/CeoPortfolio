import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Lightbulb, Globe, Award, Users, CheckCircle } from 'lucide-react';

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
    { icon: <Globe />, title: "Global Impact", desc: "Operating across 8+ countries worldwide." },
    { icon: <Award />, title: "Award Winner", desc: "Recognized for excellence and innovation." },
  ];

  return (
    <section id="about" className="py-1 relative">
      <div className="container mx-auto px-6 md:px-8">
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
            Thakur Abhishek Singh is a visionary entrepreneur and technology leader with a strong foundation in Cyber Security, holding both B.Tech and M.Tech degrees in the discipline. As the Founder and CEO of CountryEdu Private Limited and Abhishek & Company, he has been instrumental in driving innovation across the fields of IT Managed Services, EdTech, and Global Business Consulting.

With a deep understanding of software development and a passion for strategic growth hacking, Abhishek Singh has successfully led multiple ventures to remarkable milestones. His leadership emphasizes customer-centric innovation, helping clients achieve their business goals through tailored, technology-driven solutions.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8 leading-relaxed">
             Under his direction, both companies have established cross-country collaborations in the UAE, Canada, Australia, Europe, Hong Kong, and Malaysia, enabling global partnerships and expanding opportunities for clients and stakeholders alike.

With vast domain expertise and a commitment to excellence, Thakur Abhishek Singh continues to shape the future of technology and business consulting — empowering organizations to grow, innovate, and succeed in a competitive digital world.
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