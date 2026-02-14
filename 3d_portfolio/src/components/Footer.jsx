import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Mail, Phone, MapPin, Calendar, Linkedin, MessageSquare, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold text-gradient mb-6 block">Thakur Abhishek Singh</span>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              Leading innovation and driving excellence in business transformation. Empowering organizations to achieve sustainable growth.
            </p>
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
              <li className="flex items-center gap-3"><Phone size={18} className="text-primary-start"/>+91 81789 85557</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-primary-start"/> Gurugram, INDIA</li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Thakur Abhishek Singh. All rights reserved.</p>
          <div className="flex gap-4 mr-10 md:mr-20 lg:mr-24">
            <a href="https://www.linkedin.com/in/abhisheklifecoach" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-surface p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary-start transition-all"><Linkedin size={18} /></a>
            <a href="https://wa.me/918178985557" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="bg-surface p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary-start transition-all"><MessageSquare size={18} /></a>
            <a href="https://www.instagram.com/countryedu_?igsh=MThxZTJrNGMxMGYwdQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-surface p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary-start transition-all"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}