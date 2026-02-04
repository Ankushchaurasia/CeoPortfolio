
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Globe, Building2, TrendingUp, Users } from 'lucide-react';

// --- Helper Component: Animated Counter ---
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  // We use a ref to update the text directly for performance
  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-white" />;
};

// --- Helper Component: Flag Item ---
const FlagItem = ({ country, code }) => (
  // Updated: Changed justify-center to justify-start to align tops
  <div className="flex flex-col items-center justify-start mx-8 group">
    <div className="w-20 h-14 relative rounded-lg overflow-hidden shadow-lg border border-white/10 group-hover:border-primary-start transition-colors duration-300 shrink-0">
      <img
        src={`https://flagcdn.com/w160/${code}.png`}
        alt={country}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
    {/* Updated: Added whitespace-nowrap to prevent text wrapping/jumping */}
    <span className="mt-3 text-sm font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
      {country}
    </span>
  </div>
);

// --- Main Section Component ---
const GlobalImpact = () => {
  // 1. Stats Data
  const stats = [
    { id: 1, label: "Companies Founded", value: 7, icon: <Building2 />, suffix: "" },
    { id: 2, label: "Global Ventures", value: 12, icon: <Globe />, suffix: "+" },
    { id: 3, label: "Revenue Generated", value: 500, icon: <TrendingUp />, suffix: "M+" },
    { id: 4, label: "Teams Led", value: 2500, icon: <Users />, suffix: "+" },
  ];

  // 2. Flags Data (8 Countries)
  const countries = [
    { name: "United States", code: "us" },
    { name: "United Kingdom", code: "gb" },
    { name: "Germany", code: "de" },
    { name: "Singapore", code: "sg" },
    { name: "United Arab Emirates", code: "ae" },
    { name: "India", code: "in" },
    { name: "Japan", code: "jp" },
    { name: "Australia", code: "au" },
  ];

  // Duplicate list for seamless infinite scroll
  const marqueeFlags = [...countries, ...countries];

  return (
    // 👇 IMPORTANT: id="global-impact" allows the Navbar link to find this section
    <section id="global-impact" className="py-24 bg-background relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary-start/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-start font-semibold tracking-wider uppercase text-sm mb-2 block">
            Global Footprint
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Impact by the <span className="text-gradient">Numbers</span>
          </h2>
        </motion.div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: stat.id * 0.1 }}
              className="relative p-6 rounded-3xl bg-surface border border-white/5 hover:border-primary-start/30 transition-all group hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 text-primary-end group-hover:scale-125 transition-transform duration-500">
                {React.cloneElement(stat.icon, { size: 60 })}
              </div>

              <div className="relative z-10">
                <div className="mb-4 text-primary-start">
                    {stat.icon}
                </div>
                <div className="mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- INFINITE FLAG MARQUEE --- */}
      <div className="w-full border-t border-white/5 bg-surface/30 backdrop-blur-sm py-10 relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10"></div>

        <div className="flex overflow-hidden">
          {/* Updated: Changed items-center to items-start to fix alignment issues */}
          <div className="animate-marquee flex items-start pt-2">
            {marqueeFlags.map((flag, index) => (
              <FlagItem key={`${flag.code}-${index}`} country={flag.name} code={flag.code} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;