import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Ankush from '../assets/ankush.jpeg';
import sidd from '../assets/sidd.jpeg';
import ritik from '../assets/ritik.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

    const SectionHeader = ({ title, subtitle, badge }) => (
       <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
    <div className="flex justify-center mb-4">
      <div className="bg-surface p-3 rounded-2xl bg-gradient-to-br from-primary-start/20 to-primary-end/20">{badge}</div>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{title}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
  </motion.div>
);

const Card = ({ children, className = "" }) => (
  <motion.div variants={fadeInUp} className={`bg-surface p-8 rounded-3xl border border-white/5 hover:border-primary-start/30 transition-all duration-300 hover:-translate-y-1 ${className}`}>
    {children}
  </motion.div>
);

export default function Testimonials() {
  const testimonials = [
    { quote: "Working with this visionary leader transformed our entire organization. The strategic insights delivered results beyond expectations.", name: "Ankush Chaurasia", role: "CEO, Tech Innovations Inc.", image: Ankush},
    { quote: "An exceptional mentor and advisor. The guidance received was instrumental in scaling our startup from seed to Series B in record time.", name: "Siddharth Pathak", role: "Founder, StartUp Ventures", image: sidd },
    { quote: "A true thought leader. The strategic frameworks and insights have become core to how we approach complex challenges.", name: "Ritik Kumar", role: "MD, Global Finance", image: ritik }
  ];

  return (
    <section id="testimonials" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <SectionHeader title="What People Say" subtitle="Trusted by leaders across industries worldwide." badge={<Quote className="text-primary-start" />} />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <Card key={idx} className="relative">
              <Quote className="absolute top-8 left-8 text-primary-start/20 w-16 h-16" />
              <div className="relative z-10 pt-8">
                <div className="flex text-yellow-500 mb-6">★★★★★</div>
                <p className="text-lg text-gray-300 italic mb-8">"{test.quote}"</p>
                <div className="flex items-center">
                  <img src={test.image} alt={test.name} className="w-14 h-14 rounded-full mr-4 border-2 border-primary-start" />
                  <div>
                    <h4 className="font-bold">{test.name}</h4>
                    <p className="text-sm text-gray-500">{test.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}