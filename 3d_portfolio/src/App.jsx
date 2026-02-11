
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
import LoginPage from './components/LoginPage'; // Make sure you created this file from previous steps!

function App() {
  
  const [currentView, setCurrentView] = useState('portfolio');
  
  // State to manage Auth Mode ('login' or 'signup') passed to the Login Page
  const [authMode, setAuthMode] = useState('login');

  // --- HANDLERS ---

  // 1. Called when user clicks "Login" or "Signup" in Navbar
  const handleNavigateToAuth = (mode) => {
    setAuthMode(mode);
    setCurrentView('login');
    scroll.scrollToTop({ duration: 0 }); // Reset scroll to top
  };

  const handleLoginSuccess = () => {
    setCurrentView('dashboard');
    scroll.scrollToTop({ duration: 0 });
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
    scroll.scrollToTop({ duration: 0 });
  };

  // --- RENDER LOGIC (CONDITIONAL RENDERING) ---

  // VIEW 1: ADMIN DASHBOARD
  // if (currentView === 'dashboard') {
  //   return (
  //     <div className="relative">
  //       {/* Pass a logout handler to dashboard if you want a logout button there */}
  //       <button 
  //          onClick={handleBackToPortfolio}
  //          className="fixed top-4 right-4 z-[60] bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-bold border border-red-500/50 hover:bg-red-500 hover:text-white transition-all"
  //        >
  //          Log Out
  //        </button>
  //       <AdminDashboard />
  //     </div>
  //   );
  // }
  // Inside App.jsx


if (currentView === 'dashboard') {
  return (
    <div className="relative">
      <AdminDashboard onLogout={handleBackToPortfolio} /> 
    </div>
  );
}

// ...

  // VIEW 2: LOGIN / SIGNUP PAGE
  if (currentView === 'login') {
    return (
      <LoginPage 
        initialMode={authMode} 
        onLoginSuccess={handleLoginSuccess}
        onBack={handleBackToPortfolio}
      />
    );
  }

  // VIEW 3: MAIN PORTFOLIO (Default)
  return (
    <div className="antialiased relative bg-[#0a0a14] text-white selection:bg-purple-500/30">
      
      {/* Navbar gets the handler to switch views */}
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
      
      {/* Floating AI Assistant (Only show on portfolio) */}
      <FloatingAi />

    </div>
  );
}

export default App;

