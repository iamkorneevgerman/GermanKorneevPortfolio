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
          Frontend-разработчик • Преподаватель
        </motion.span>
        <motion.h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-none mb-12">
          КОД И <br /> <span className="text-gradient">ЗНАНИЯ</span>
        </motion.h1>

        <p className="text-gray-400 max-w-lg mx-auto mb-12 text-lg">
          Создаю современные веб-интерфейсы и помогаю другим освоить
          программирование с нуля
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="group px-10 py-4 glass rounded-full hover:bg-white transition-all duration-500 font-bold text-sm"
          >
            <span className="text-white group-hover:text-gradient transition-all duration-500">
              МОИ ПРОЕКТЫ
            </span>
          </a>
        </div>
      </motion.div>
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
