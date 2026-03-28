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

        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
          Открыт к новым <br />
          <span className="text-gradient">вызовам</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm mb-16 uppercase tracking-[0.2em]">
          Ищу позицию Frontend-разработчика в сильную команду
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="mailto:malbolge1@yandex.ru"
            className="px-12 py-5 bg-white text-gray-900 rounded-full font-bold hover:bg-accent hover:text-white transition-colors cursor-pointer"
          >
            Написать на почту
          </a>
          <a
            href="https://t.me/imgerman"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 glass rounded-full font-bold hover:bg-white/10 transition-colors cursor-pointer"
          >
            Telegram
          </a>
        </div>
      </motion.div>
    </section>
  );
}
