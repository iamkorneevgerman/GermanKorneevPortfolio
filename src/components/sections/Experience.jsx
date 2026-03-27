import { motion } from "framer-motion";
import { experience } from "../../data/mockData";

export default function Experience() {
  return (
    <section id="experience" className="py-40">
      <h2 className="text-6xl font-bold tracking-tighter mb-20">
        Опыт и <br />
        <span className="text-gray-500">практика</span>
      </h2>

      <div className="space-y-12">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row gap-8 hover:border-accent/30 transition-colors"
          >
            <div className="md:w-1/3">
              <span className="font-mono text-accent text-sm mb-2 block">
                {exp.period}
              </span>
              <h3 className="text-2xl font-bold leading-tight">
                {exp.company}
              </h3>
              <p className="text-purple font-medium mt-2">{exp.position}</p>
            </div>

            <div className="md:w-2/3 space-y-4">
              <p className="text-gray-400 text-lg leading-relaxed italic">
                "{exp.description}"
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-sm font-mono text-white/60">
                  <span className="text-accent mr-2">●</span> {exp.achievements}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
