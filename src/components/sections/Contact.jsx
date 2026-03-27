import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="glass p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 relative z-10">
          Let's create <br />
          <span className="text-gradient">the future.</span>
        </h2>

        <p className="text-gray-400 font-mono text-sm mb-16 uppercase tracking-[0.2em] relative z-10">
          Available for senior roles & strategic consultations.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative z-10">
          <a
            href="mailto:hello@architect.dev"
            className="group flex items-center gap-3 text-4xl font-bold hover:text-accent transition-colors"
          >
            hello@architect.dev{" "}
            <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
