import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Mail, Phone, MapPin, Calendar, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold text-gradient mb-6 block">CEO Portfolio</span>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              Leading innovation and driving excellence in business transformation. Empowering organizations to achieve sustainable growth.
            </p>
            {/* <div className="bg-surface p-6 rounded-3xl border border-white/5 inline-block">
              <h5 className="font-bold mb-4">Looking for Collaboration?</h5>
              <ScrollLink to="contact" smooth={true} offset={-70} className="bg-gradient-to-r-theme text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity cursor-pointer text-sm flex items-center gap-2 w-fit">
                <Calendar size={16}/> Schedule a Call
              </ScrollLink>
            </div> */}
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About','Vision','Services','Contact'].map(link => (
                <li key={link}>
                  <ScrollLink to={link.toLowerCase()} smooth={true} offset={-70} className="text-gray-400 hover:text-primary-start transition-colors cursor-pointer">{link}</ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3"><Mail size={18} className="text-primary-start"/> ceo@example.com</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-primary-start"/> +1 (555) 123-4567</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-primary-start"/> New York, USA</li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 CEO Portfolio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="bg-surface p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary-start transition-all"><Linkedin size={18} /></a>
            <a href="#" className="bg-surface p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary-start transition-all"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}