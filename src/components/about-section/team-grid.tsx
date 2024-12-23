import { motion } from 'framer-motion';

const TEAM_MEMBERS = [
  {
    name: 'Kate Wilson',
    role: 'Design Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    gradient: 'from-pink-500/80 to-rose-500/80'
  },
  {
    name: 'Josh Chen',
    role: 'Marketing Expert',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    gradient: 'from-violet-500/80 to-purple-500/80'
  },
  {
    name: 'Franco Rivera',
    role: 'Business Strategist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    gradient: 'from-blue-500/80 to-indigo-500/80'
  }
];

export function TeamGrid() {
  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-violet-500/20 to-blue-500/20 blur-3xl opacity-30" />
      
      <div className="relative grid grid-cols-2 gap-4">
        {TEAM_MEMBERS.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative group ${index === 2 ? "col-span-2" : ""}`}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
              
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-white/90 text-sm">{member.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}