import { motion } from 'framer-motion';

const TEAM_MEMBERS = [
  {
    name: 'Kate',
    role: 'Design Lead',
    description: 'Former UI/UX designer at a Fortune 500 company, Kate brings her expertise in creating stunning digital products that sell.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    name: 'Josh',
    role: 'Marketing Expert',
    description: 'Ex-marketing director who turned his side hustle into a 7-figure business using PLR products and smart marketing strategies.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    name: 'Franco',
    role: 'Business Strategist',
    description: "The mastermind behind PLR Box's success, Franco left his corporate job to revolutionize the digital product industry.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  }
];

export function TeamMembers() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {TEAM_MEMBERS.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-lg p-3 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            
            <div className="relative">
              <h3 className="text-lg font-semibold text-white mb-0.5">
                {member.name}
              </h3>
              <div className="text-pink-400 text-xs mb-2">
                {member.role}
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}