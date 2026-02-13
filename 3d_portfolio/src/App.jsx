import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Company from './components/Company';
import Vision from './components/Vision';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingAi from './components/FloatingAi';

import AdminDashboard from './components/AdminDashboard';
import LoginPage from './components/LoginPage';

function App() {
  
  const [currentView, setCurrentView] = useState('portfolio');
  const [authMode, setAuthMode] = useState('login');

  const handleNavigateToAuth = (mode) => {
    setAuthMode(mode);
    setCurrentView('login');
    scroll.scrollToTop({ duration: 0 }); 
  };

  const handleLoginSuccess = () => {
    setCurrentView('dashboard');
    scroll.scrollToTop({ duration: 0 });
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
    scroll.scrollToTop({ duration: 0 });
  };

  // Admin Dashboard view
  if (currentView === 'dashboard') {
    return (
      <div className="relative">
        <AdminDashboard onLogout={handleBackToPortfolio} /> 
      </div>
    );
  }

  // Login view
  if (currentView === 'login') {
    return (
      <LoginPage 
        initialMode={authMode} 
        onLoginSuccess={handleLoginSuccess}
        onBack={handleBackToPortfolio}
      />
    );
  }

  // Portfolio view
  return (
    <div className="antialiased relative bg-[#0a0a14] text-white selection:bg-purple-500/30">
    
      <Navbar onNavigateToAuth={handleNavigateToAuth} />
      
      <main>
        <Hero />
        <About />
        <Company />
        <Vision />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingAi />

    </div>
  );
}

export default App;
