import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-40 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-6xl font-bold tracking-tighter leading-none">
            I simplify <br />
            <span className="text-gray-500">complexity.</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Как Senior-инженер, я не просто пишу код. Я проектирую устойчивые
            архитектуры и делюсь знаниями, превращая запутанные концепции в
            интуитивно понятные цифровые продукты.
          </p>
          <div className="flex gap-12 pt-4">
            <div>
              <div className="text-4xl font-bold text-accent tracking-tighter">
                8+
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-mono">
                Years Exp.
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple tracking-tighter">
                40+
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-mono">
                Projects
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white tracking-tighter">
                1k+
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-mono">
                Students
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
          <div className="relative glass p-4 rounded-[3rem] transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000"
              alt="Architect Profile"
              className="rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
