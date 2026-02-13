import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { ChevronRight } from 'lucide-react';
import ceoImage from '../assets/ceo-placeholder.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-[20%] left-[8%] w-[320px] h-[320px] bg-primary-start/25 rounded-full blur-[140px]"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[15%] right-[10%] w-[360px] h-[360px] bg-primary-end/25 rounded-full blur-[160px]"
        animate={{ y: [0, 35, 0], x: [0, -25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background blur */}
      <div className="absolute top-20 left-[-10%] w-[40%] h-[40%] bg-primary-start/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-[-10%] w-[30%] h-[30%] bg-primary-end/20 blur-[100px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex-1 text-center lg:text-left"
        >

          <motion.div variants={fadeInUp} className="inline-block px-4 py-2 bg-surface rounded-full text-sm font-medium mb-6 border border-white/10">
            <span className="text-gradient">Driving Innovation & Growth</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
            We <span className="bg-gradient-to-r from-primary-start via-primary-end to-primary-start bg-[length:200%_200%] animate-gradient text-transparent bg-clip-text">
              Convert Concept
            </span> Into Technology
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
            Visionary leadership focused on digital transformation, sustainable scaling, and creating lasting global impact.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

            <ScrollLink
              to="contact"
              smooth={true}
              offset={-70}
              className="bg-gradient-to-r-theme text-white font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
            >
              Let's Connect <ChevronRight size={20} />
            </ScrollLink>

            <ScrollLink
              to="services"
              smooth={true}
              offset={-70}
              className="bg-surface text-white font-bold py-4 px-8 rounded-full hover:bg-surface-hover transition-colors cursor-pointer border border-white/10"
            >
              Explore Expertise
            </ScrollLink>

          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >

          <div className="relative z-10 w-full max-w-md mx-auto lg:max-w-full lg:ml-auto aspect-square rounded-[3rem] overflow-hidden border-4 border-surface/50">
            <img
              src={ceoImage || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"}
              alt="CEO Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-primary-start to-primary-end opacity-30 blur-3xl -z-10 transform translate-x-4 translate-y-4 rounded-[3rem]"></div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
