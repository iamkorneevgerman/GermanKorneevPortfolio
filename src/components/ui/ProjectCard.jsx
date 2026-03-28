import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center mb-32`}
    >
      <div className="w-full md:w-3/5 overflow-hidden rounded-2xl glass group relative">
        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[300px] md:h-[450px] object-cover transition-all duration-700 group-hover:scale-105"
        />
      </div>

      <div className="w-full md:w-2/5">
        <div className="flex flex-wrap gap-2 mb-4 max-w-[420px]">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[10px] font-mono border border-accent/30 text-accent px-2 py-1 rounded whitespace-nowrap hover:bg-accent/10 transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
        <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
          {project.description}
        </p>
        <div className="flex gap-6">
          <a
            href={project.link}
            className="flex items-center gap-2 hover:text-accent transition-colors group"
          >
            <span className="text-sm font-bold uppercase tracking-tighter">
              Source
            </span>
          </a>
          <a
            href={project.link}
            className="flex items-center gap-2 hover:text-accent transition-colors group"
          >
            <span className="text-sm font-bold uppercase tracking-tighter">
              Live Demo
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
