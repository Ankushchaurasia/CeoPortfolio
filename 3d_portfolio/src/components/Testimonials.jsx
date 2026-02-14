import React from 'react';
import { motion } from 'framer-motion';
 import { Quote } from 'lucide-react';
import Ankush from '../assets/ankush.jpeg';
import sidd from '../assets/sidd.jpeg';
 import ritik from '../assets/ritik.jpeg';
import { SectionHeader, Card } from './About';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Testimonials() {
  const testimonials = [
    { quote: "Working with this visionary leader transformed our entire organization. The strategic insights delivered results beyond expectations.", name: "Ankush Chaurasia", role: "CEO, Tech Innovations Inc.", image: Ankush},
    { quote: "An exceptional mentor and advisor. The guidance received was instrumental in scaling our startup from seed to Series B in record time.", name: "Siddharth Pathak", role: "Founder, StartUp Ventures", image: sidd },
      { quote: "A true thought leader. The strategic frameworks and insights have become core to how we approach complex challenges.,,,,,,,,,,,,,,,,,,,   nnnnjnkn", name: "Ritik Kumar",role: "MD, Global Finance", image: ritik },
    { quote: "A true thought leader. The strategic frameworks and insights have become core to how we approach complex challenges.,,,,,,,,,,,,,,,,,,,,kf;dfdf.", name: "Ritik Kumar", role: "MD, Global Finance", image: ritik },
    { quote: "Working with this visionary leader transformed our entire organization. The strategic insights delivered results beyond expectations.", name: "Ankush Chaurasia", role: "CEO, Tech Innovations Inc.", image: Ankush}
  ];

  return (
    <section id="testimonials" className="py-10 bg-surface/30">
      <div className="container mx-auto px-6 max-w-7xl">
     <SectionHeader title="What People Say" subtitle="Trusted by leaders across industries worldwide." badge={<Quote className="text-primary-start" />} />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-5 items-stretch">
          {testimonials.map((test, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <Card className="relative flex flex-col h-full cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <Quote className="absolute top-6 left-6 text-primary-start/20 w-12 h-12" />
                <div className="relative z-10 pt-10 flex-1">
                  <div className="flex text-yellow-500 mb-4">★★★★★</div>
              <p className="text-base md:text-lg lg:text-sm text-gray-300 italic mb-6 leading-relaxed">"{test.quote}"</p>
                  <div className="flex items-center mt-auto">
                    <img src={test.image} alt={test.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3 border-2 border-primary-start object-cover" />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">{test.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">{test.role}</p>
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