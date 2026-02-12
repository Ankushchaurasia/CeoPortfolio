
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, ArrowLeft } from 'lucide-react';

const LoginPage = ({ initialMode = 'login', onLoginSuccess, onBack }) => {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Update internal state if the prop changes
  useEffect(() => {
    setIsLogin(initialMode === 'login');
  }, [initialMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
     
      if (isLogin) {
        if (email === 'admin@ceo.com' && password === 'admin') {
          onLoginSuccess(); 
        } else {
          setError('Invalid Credentials (Try: admin@ceo.com / admin)');
          setLoading(false);
        }
      } else {
        setError('Signup is currently invite-only.');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a14] flex items-center justify-center p-4 relative overflow-hidden">
      
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-pink-600/20 blur-[150px] rounded-full"></div>

      
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors z-20"
      >
        <ArrowLeft size={20} /> Back to Portfolio
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        className="w-full max-w-md bg-[#12122a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative z-10 p-8 md:p-10"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-400">
            {isLogin ? 'Enter your details to access the admin panel.' : 'Join the team and start managing content.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
              <div className="relative">
                 <User className="absolute left-4 top-3.5 text-gray-500" size={20} />
                 <input type="text" placeholder="Full Name" className="w-full bg-[#0a0a14] border border-white/10 py-3.5 pl-12 pr-4 rounded-xl text-white focus:border-purple-500 outline-none transition-all" />
              </div>
            </motion.div>
          )}

          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-gray-500" size={20} />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0a0a14] border border-white/10 py-3.5 pl-12 pr-4 rounded-xl text-white focus:border-purple-500 outline-none transition-all" 
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-gray-500" size={20} />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0a0a14] border border-white/10 py-3.5 pl-12 pr-4 rounded-xl text-white focus:border-purple-500 outline-none transition-all" 
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded-lg">{error}</p>}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all flex justify-center items-center gap-2 shadow-lg shadow-purple-500/25 mt-2"
          >
            {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : (isLogin ? 'Sign In' : 'Sign Up')} 
            {!loading && <ArrowRight size={20} />}
          </button>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-white/5">
          <p className="text-gray-500 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => { setIsLogin(!isLogin); setError(''); }}
              className="ml-2 text-purple-400 hover:text-purple-300 font-bold transition-colors"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;