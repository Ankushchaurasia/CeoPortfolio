
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll'; // Added Import

const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const SectionHeader = ({ title, subtitle, badge }) => (
  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
    <div className="flex justify-center mb-4">
      <div className="bg-surface p-3 rounded-2xl bg-gradient-to-br from-primary-start/20 to-primary-end/20">{badge}</div>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{title}</h2>
    <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
  </motion.div>
);

export default function Contact() {
  return (
    <section id="contact" className="py-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-primary-end/10 blur-[150px] rounded-full -z-10"></div>
      <div className="container mx-auto px-6">
        <SectionHeader title="Let's Connect" subtitle="Ready to start a conversation? Reach out and let's explore opportunities." badge={<Mail className="text-primary-start" />} />
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Left Side: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            {/* Existing Contact List */}
            {[
              { icon: <Mail size={20} />, title: "Email", val: "ceo@example.com" },
              { icon: <Phone size={20} />, title: "Phone", val: "+1 (555) 123-4567" },
              { icon: <MapPin size={20} />, title: "Location", val: "New York, USA" },
              { icon: <Calendar size={20} />, title: "Schedule", val: "Book a Meeting" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center p-6 bg-surface rounded-3xl border border-white/5 hover:border-primary-start/30 transition-colors">
                <div className="bg-gradient-to-br from-primary-start to-primary-end p-4 rounded-2xl text-white mr-6 shadow-lg shadow-primary-start/20">{item.icon}</div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">{item.title}</p>
                  <p className="text-lg font-medium">{item.val}</p>
                </div>
              </div>
            ))}

            {/* NEW ADDITION: Collaboration Card */}
            <div className="bg-surface p-6 rounded-3xl border border-white/5 inline-block w-full hover:border-primary-start/30 transition-colors">
              <h5 className="font-bold mb-4">Looking for Collaboration?</h5>
              <ScrollLink to="contact" smooth={true} offset={-70} className="bg-gradient-to-r-theme text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity cursor-pointer text-sm flex items-center gap-2 w-fit">
                <Calendar size={16}/> Schedule a Call
              </ScrollLink>
            </div>

          </motion.div>

          {/* Right Side: Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 bg-surface p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-start/5 to-primary-end/5 rounded-[3rem] -z-10"></div>
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                <input type="text" placeholder="John Doe" className="w-full bg-background border border-white/10 px-4 py-4 rounded-xl focus:outline-none focus:border-primary-start transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-background border border-white/10 px-4 py-4 rounded-xl focus:outline-none focus:border-primary-start transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Company (Optional)</label>
                <input type="text" placeholder="Your Company" className="w-full bg-background border border-white/10 px-4 py-4 rounded-xl focus:outline-none focus:border-primary-start transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                <textarea rows="4" placeholder="Tell me about your project..." className="w-full bg-background border border-white/10 px-4 py-4 rounded-xl focus:outline-none focus:border-primary-start transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r-theme text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-primary-start/25">
                Send Message <ArrowRight />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}