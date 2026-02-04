
import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

// --- IMPORT COMPONENTS ---
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

// Admin & Auth Components
import AdminDashboard from './components/AdminDashboard';
import LoginPage from './components/LoginPage'; // Make sure you created this file from previous steps!

function App() {
  // State to manage which "Page" is currently visible
  // Options: 'portfolio', 'login', 'dashboard'
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

  // 2. Called when user successfully logs in via LoginPage
  const handleLoginSuccess = () => {
    setCurrentView('dashboard');
    scroll.scrollToTop({ duration: 0 });
  };

  // 3. Called when user clicks "Back" on LoginPage or "Logout" on Dashboard
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

// ...

// VIEW 1: ADMIN DASHBOARD
if (currentView === 'dashboard') {
  return (
    <div className="relative">
      {/* We pass the logout function directly to the dashboard component */}
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

