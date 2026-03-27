import { motion } from "framer-motion";

export default function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 glass rounded-3xl relative overflow-hidden group"
    >
      <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
        {skill.icon}
      </div>
      <h3 className="text-2xl font-bold mb-6 tracking-tight">
        {skill.category}
      </h3>
      <ul className="space-y-3">
        {skill.items.map((item) => (
          <li
            key={item}
            className="text-gray-400 font-mono text-sm flex items-center gap-3"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            {item}
          </li>
        ))}
      </ul>
      <div className="absolute -right-4 -bottom-4 text-white/[0.02] text-9xl font-bold rotate-12 pointer-events-none group-hover:text-accent/[0.05] transition-colors">
        {index + 1}
      </div>
    </motion.div>
  );
}
