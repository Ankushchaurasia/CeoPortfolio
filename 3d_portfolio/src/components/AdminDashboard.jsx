
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, MessageSquare, Users, Settings, LogOut, 
  Search, Bell, ChevronRight, TrendingUp, Briefcase, 
  Trash2, CheckCircle, Target, Globe, BookOpen, Layers
} from 'lucide-react';

// --- MOCK DATA ---
const initialMessages = [
  { id: 1, name: "Sarah Johnson", email: "sarah@tech.com", subject: "Partnership Opportunity", date: "2 mins ago", status: "New" },
  { id: 2, name: "Michael Chen", email: "m.chen@startup.io", subject: "Investment Inquiry", date: "2 hours ago", status: "Read" },
  { id: 3, name: "Emma Davis", email: "emma@design.co", subject: "Speaking Request", date: "1 day ago", status: "Replied" },
];

const statsData = [
  { title: "Total Views", value: "124.5k", change: "+12%", icon: <Users />, color: "text-blue-400", bg: "bg-blue-500/10" },
  { title: "New Messages", value: "48", change: "+5%", icon: <MessageSquare />, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { title: "Active Services", value: "8", change: "0%", icon: <Briefcase />, color: "text-purple-400", bg: "bg-purple-500/10" },
  { title: "Conversion Rate", value: "4.2%", change: "+0.8%", icon: <TrendingUp />, color: "text-pink-400", bg: "bg-pink-500/10" },
];

// --- SIDEBAR ITEM COMPONENT ---
const SidebarItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${active ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
  >
    {React.cloneElement(icon, { size: 18, className: active ? 'text-purple-400' : '' })}
    <span className="font-medium text-sm">{label}</span>
    {active && <motion.div layoutId="active-pill" className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />}
  </button>
);

const AdminDashboard = ({ onLogout }) => { // <--- Receives onLogout prop from App.jsx
  const [activeTab, setActiveTab] = useState('overview');
  const [messages, setMessages] = useState(initialMessages);

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter(m => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0a0a14] flex text-white font-sans overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-[#12122a] border-r border-white/5 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-white/5">
           <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Admin Panel</h1>
           <p className="text-xs text-gray-500 mt-1">Content Management System</p>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto space-y-1">
          {/* Main Controls */}
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2 mt-2">Dashboard</div>
          <SidebarItem icon={<LayoutDashboard />} label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
          <SidebarItem icon={<MessageSquare />} label="Messages" active={activeTab === 'messages'} onClick={() => setActiveTab('messages')} />
          <SidebarItem icon={<Users />} label="Visitors" active={activeTab === 'visitors'} onClick={() => setActiveTab('visitors')} />
          
          {/* Content Sections (Matches Website Navbar) */}
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2 mt-6">Edit Content</div>
          <SidebarItem icon={<Briefcase />} label="Hero Section" active={activeTab === 'hero'} onClick={() => setActiveTab('hero')} />
          <SidebarItem icon={<Users />} label="About Me" active={activeTab === 'about'} onClick={() => setActiveTab('about')} />
          <SidebarItem icon={<Globe />} label="Global Impact" active={activeTab === 'global'} onClick={() => setActiveTab('global')} />
          <SidebarItem icon={<Target />} label="Vision & Mission" active={activeTab === 'vision'} onClick={() => setActiveTab('vision')} />
          <SidebarItem icon={<Layers />} label="Services" active={activeTab === 'services'} onClick={() => setActiveTab('services')} />
          <SidebarItem icon={<BookOpen />} label="Testimonials" active={activeTab === 'testimonials'} onClick={() => setActiveTab('testimonials')} />

          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2 mt-6">System</div>
          <SidebarItem icon={<Settings />} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={onLogout} // <--- Calls the Logout function
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors text-sm font-medium"
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Top Header */}
        <header className="h-16 border-b border-white/5 bg-[#0a0a14]/50 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-20">
          <div className="md:hidden font-bold text-lg text-white">Admin Panel</div> {/* Mobile Title */}
          
          <div className="hidden md:flex items-center gap-4 w-96 bg-[#12122a] px-4 py-2 rounded-full border border-white/5 focus-within:border-purple-500/50 transition-colors">
            <Search size={18} className="text-gray-500" />
            <input type="text" placeholder="Search..." className="bg-transparent border-none focus:outline-none text-sm w-full text-white placeholder-gray-600" />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full border border-[#0a0a14]"></span>
            </button>
            
            {/* User Avatar (No extra buttons) */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[2px]">
               <div className="w-full h-full rounded-full bg-[#12122a] flex items-center justify-center text-xs font-bold text-white">
                 A
               </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#0a0a14]">
          <AnimatePresence mode="wait">
            
            {/* --- TAB: OVERVIEW --- */}
            {activeTab === 'overview' && (
              <motion.div 
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-1 text-white">Dashboard Overview</h2>
                  <p className="text-gray-400 text-sm">Welcome back, Admin. Here's your site performance.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {statsData.map((stat, idx) => (
                    <div key={idx} className="bg-[#12122a] p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                          {stat.icon}
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-400'}`}>
                          {stat.change}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-1 text-white">{stat.value}</h3>
                      <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">{stat.title}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Messages Section */}
                <div className="bg-[#12122a] rounded-3xl border border-white/5 overflow-hidden">
                  <div className="p-6 border-b border-white/5 flex justify-between items-center">
                    <h3 className="font-bold text-white">Recent Messages</h3>
                    <button 
                      onClick={() => setActiveTab('messages')}
                      className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 transition-colors"
                    >
                      View All <ChevronRight size={14} />
                    </button>
                  </div>
                  <div className="divide-y divide-white/5">
                    {messages.slice(0, 3).map((msg) => (
                      <div key={msg.id} className="p-4 hover:bg-white/[0.02] transition-colors flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-sm font-bold text-white">
                          {msg.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-white truncate">{msg.subject}</h4>
                          <p className="text-xs text-gray-500 truncate">{msg.name} • {msg.email}</p>
                        </div>
                        <div className="text-right shrink-0">
                           <span className="text-xs text-gray-500 block mb-1">{msg.date}</span>
                           <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${msg.status === 'New' ? 'bg-purple-500/20 text-purple-400' : 'bg-green-500/20 text-green-400'}`}>
                             {msg.status}
                           </span>
                        </div>
                      </div>
                    ))}
                    {messages.length === 0 && (
                      <div className="p-8 text-center text-gray-500 text-sm">No messages found.</div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- TAB: MESSAGES --- */}
            {activeTab === 'messages' && (
              <motion.div 
                key="messages"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                 <div className="mb-6 flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold mb-1 text-white">Inbox</h2>
                      <p className="text-gray-400 text-sm">Manage your enquiries.</p>
                    </div>
                    <button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Mark all read
                    </button>
                 </div>

                 <div className="space-y-3">
                   {messages.map((msg) => (
                     <motion.div 
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={msg.id} 
                        className="bg-[#12122a] p-4 rounded-2xl border border-white/5 flex flex-col md:flex-row items-start md:items-center gap-4 group hover:border-purple-500/30 transition-all"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 text-purple-300 flex items-center justify-center font-bold shrink-0">
                          {msg.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                           <div className="flex items-center gap-2 mb-1">
                             <h4 className="font-bold text-white">{msg.subject}</h4>
                             {msg.status === 'New' && <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>}
                           </div>
                           <p className="text-sm text-gray-400">{msg.name} <span className="text-gray-600 mx-1">|</span> {msg.email}</p>
                           <p className="text-xs text-gray-500 mt-2 line-clamp-1">Hi, I'm interested in discussing a potential collaboration regarding...</p>
                        </div>
                        <div className="flex items-center gap-3 self-end md:self-center">
                           <span className="text-xs text-gray-500">{msg.date}</span>
                           <button onClick={() => handleDeleteMessage(msg.id)} className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all" title="Delete">
                             <Trash2 size={18} />
                           </button>
                           <button className="p-2 text-gray-500 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all" title="Mark Read">
                             <CheckCircle size={18} />
                           </button>
                        </div>
                     </motion.div>
                   ))}
                    {messages.length === 0 && (
                       <div className="p-16 text-center bg-[#12122a] rounded-3xl border border-white/5 border-dashed">
                        <div className="inline-block p-4 rounded-full bg-white/5 mb-4 text-gray-500"><MessageSquare size={32} /></div>
                        <p className="text-gray-400">All caught up! No messages.</p>
                      </div>
                    )}
                 </div>
              </motion.div>
            )}

            {/* --- PLACEHOLDERS FOR OTHER TABS --- */}
            {['hero', 'about', 'global', 'vision', 'services', 'testimonials', 'visitors', 'settings'].includes(activeTab) && (
                 <motion.div 
                 key="placeholder"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 className="flex flex-col items-center justify-center h-[50vh] text-center"
               >
                 <div className="p-6 bg-[#12122a] rounded-full mb-6 border border-white/5 text-gray-600">
                    <Settings size={48} />
                 </div>
                 <h2 className="text-2xl font-bold text-white mb-2 capitalize">{activeTab} Manager</h2>
                 <p className="text-gray-500 max-w-md">
                   This module is under development. In a real application, you would edit the {activeTab} content here.
                 </p>
               </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;