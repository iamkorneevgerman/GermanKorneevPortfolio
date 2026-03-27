import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple/10 blur-[150px] rounded-full" />
      </div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 text-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-accent mb-6 tracking-[0.5em] block uppercase text-xs"
        >
          Senior Frontend Developer • Mentor
        </motion.span>
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none mb-12"
        >
          BUILDING <br /> <span className="text-gradient">SYSTEMS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-10 py-4 glass rounded-full hover:bg-white hover:text-black transition-all duration-500 font-bold tracking-tighter uppercase text-sm"
          >
            View Work
          </a>
        </motion.div>
      </motion.div>

      {/* Structural Grid Decor */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />
    </section>
  );
}
