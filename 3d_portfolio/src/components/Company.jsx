import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Globe, Building2, TrendingUp, Users } from 'lucide-react';
import { SectionHeader, Card } from './About';

// for animation helping components
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest) + suffix;
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight break-words" />;
};

// Flag item
const FlagItem = ({ country, code }) => (
  <div className="flex flex-col items-center justify-start mx-6 group shrink-0">
    <div className="w-20 h-14 relative rounded-lg overflow-hidden shadow-lg border border-white/10 group-hover:border-primary-start transition-colors duration-300">
      <img
        src={`https://flagcdn.com/w160/${code}.png`}
        alt={country}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
    <span className="mt-3 text-sm font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
      {country}
    </span>
  </div>
);

const GlobalImpact = () => {
  const stats = [
    { id: 1, label: "Companies Founded", value: 2, icon: <Building2 />, suffix: "" },
    { id: 2, label: "Global Ventures", value: 9, icon: <Globe />, suffix: "+" },
    { id: 3, label: "Revenue Generated", value: 560, icon: <TrendingUp />, suffix: "M+" },
    { id: 4, label: "Teams Led", value: 200, icon: <Users />, suffix: "+" },
  ];

  const countries = [
    { name: "India", code: "in" },
    { name: "United Arab Emirates", code: "ae" },
    { name: "Australia", code: "au" },
    { name: "Canada", code: "ca" },
    { name: "Oman", code: "om" },
    { name: "Europe", code: "eu" },
    { name: "Malaysia", code: "my" },
    { name: "Hong Kong", code: "hk" },
  ];

  const marqueeFlags = [...countries, ...countries];

  return (
    <section id="global-impact" className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary-start/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 mb-12">
        <SectionHeader
          title="Impact by the Numbers"
          subtitle="Our global footprint and measurable outcomes."
          badge={<Globe className="text-primary-start" />}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: stat.id * 0.06 }}
            >
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 text-primary-end pointer-events-none">
                  {React.cloneElement(stat.icon, { size: 56 })}
                </div>

                <div className="relative z-10">
                  <div className="mb-4 text-primary-start inline-flex items-center justify-center p-2 rounded-lg bg-surface/10 w-fit">
                    {React.cloneElement(stat.icon, { size: 20 })}
                  </div>
                  <div className="mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-400 font-medium">{stat.label}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-white/5 bg-surface/30 backdrop-blur-sm py-8 relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="overflow-hidden">
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