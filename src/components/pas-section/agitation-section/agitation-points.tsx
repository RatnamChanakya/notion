import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { AGITATION_POINTS } from '../constants';

export function AgitationPoints() {
  return (
    <div className="space-y-4">
      <h4 className="text-center text-xl text-orange-200/90 mb-8">
        The Reality of Low-Ticket Digital Products
      </h4>
      {AGITATION_POINTS.map((point, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="relative group max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-6 bg-gradient-to-r from-orange-950/30 to-red-900/20 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
            <div className="flex-shrink-0 inline-flex p-3 rounded-lg bg-orange-500/10">
              <point.icon className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-orange-200 mb-2">{point.title}</h4>
              <p className="text-orange-200/80 leading-relaxed">{point.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}