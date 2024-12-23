import { motion } from 'framer-motion';
import { Users, TrendingUp, Globe } from 'lucide-react';
import { TeamMembers } from './team-members';
import { cn } from '@/lib/utils';

const STATS = [
  { icon: Users, value: '50K+', label: 'Active Sellers' },
  { icon: TrendingUp, value: '$5M+', label: 'Monthly Sales' },
  { icon: Globe, value: '120+', label: 'Countries' }
];

export function AboutSection({ className }: { className?: string }) {
  return (
    <section id="about" className={cn("relative bg-[#030712] min-h-[85vh] flex items-center", className)}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-violet-500/5 to-pink-500/10 blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-6">
                Built in Bali 🌴
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Built by Digital
                <span className="block mt-2 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
                  Product Experts
                </span>
              </h2>
              <p className="mt-4 text-gray-400 text-base leading-relaxed">
                We left our corporate jobs behind and moved to Bali with a dream: to help others achieve financial freedom through digital products. What started as a side hustle turned into a movement that's helped thousands of entrepreneurs.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-4 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <div className="relative">
                      <stat.icon className="w-6 h-6 text-pink-400 mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Team Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <div className="relative h-full rounded-2xl overflow-hidden group">
              <img
                src="https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/6750fccf6c55b51fe8dfe363.png"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: 'Josh', role: 'Marketing' },
                    { name: 'Kate', role: 'Strategy' },
                    { name: 'Franco', role: 'Product' }
                  ].map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="text-center relative"
                    >
                      <div className="relative z-10">
                        <div className="text-2xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] mb-1">
                          {member.name}
                        </div>
                        <div className="text-white/90 text-sm font-medium tracking-wide uppercase bg-gradient-to-r from-pink-500/80 to-violet-500/80 px-3 py-1 rounded-full inline-block backdrop-blur-sm">
                          {member.role}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent blur-sm -z-10" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}