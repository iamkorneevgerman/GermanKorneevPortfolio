export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 px-6">
      <div className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
        Designed & Engineered by The Knowledge Architect © 2025
      </div>

      <div className="flex gap-6">
        <a
          href="#"
          className="text-gray-400 hover:text-accent transition-colors text-sm"
        >
          GitHub
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-accent transition-colors text-sm"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-accent transition-colors text-sm"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-accent transition-colors text-sm"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
