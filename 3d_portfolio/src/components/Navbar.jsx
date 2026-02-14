import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogIn, UserPlus, Settings } from 'lucide-react';

const Navbar = ({ onNavigateToAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Company', to: 'global-impact' },
    { name: 'Vision', to: 'vision' },
    { name: 'Services', to: 'services' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleAuthClick = (mode) => {
    setProfileOpen(false);
    setIsOpen(false);
    onNavigateToAuth(mode); 
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a14]/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer" onClick={scroll.scrollToTop}>
          Abhishek Singh
        </span>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm font-medium uppercase tracking-wider"
              activeClass="text-purple-400 font-bold"
              spy={true}
            >
              {link.name}
            </ScrollLink>
          ))}

            <div className="relative">
              <button 
                onClick={() => setProfileOpen(!profileOpen)}
                className={`p-2 rounded-full transition-all border ${profileOpen ? 'bg-purple-500 text-white border-purple-500' : 'bg-white/5 text-gray-400 border-transparent hover:text-white hover:bg-white/10'}`}
              >
                <User size={20} />
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-48 bg-[#12122a] rounded-xl border border-white/10 shadow-xl overflow-hidden"
                  >
                    <div className="p-1.5 space-y-1">
                      <button onClick={() => handleAuthClick('login')} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left group">
                        <LogIn size={16} className="text-purple-400 group-hover:text-purple-300"/> Admin Login
                      </button>
                      <button onClick={() => handleAuthClick('signup')} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left group">
                        <UserPlus size={16} className="text-pink-400 group-hover:text-pink-300"/> Sign Up
                      </button>
                      <div className="h-px bg-white/10 my-1"></div>
                      <button onClick={() => alert("Settings Panel Coming Soon!")} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left">
                        <Settings size={16} /> Settings
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
        </div>

        <div className="lg:hidden flex items-center gap-4">
           <button onClick={() => setProfileOpen(!profileOpen)} className="text-gray-300">
             <User size={24} />
           </button>
           <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
             {isOpen ? <X size={28} /> : <Menu size={28} />}
           </button>
        </div>
      </div>

  <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#12122a] border-b border-white/5 absolute w-full z-40"
          >
            <div className="p-4 space-y-2">
              {navLinks.map(link => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm text-gray-300 hover:text-white rounded-lg cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
        {profileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
           className="lg:hidden bg-[#12122a] border-b border-white/5 absolute w-full z-40"
          >
            <div className="p-4 space-y-2">
                <button onClick={() => handleAuthClick('login')} className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl text-white">
                    <LogIn size={20} className="text-purple-400"/> Login
                </button>
                <button onClick={() => handleAuthClick('signup')} className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl text-white">
                    <UserPlus size={20} className="text-pink-400"/> Sign Up
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;