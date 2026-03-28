export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 px-6">
      <div className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
        Crafted by German Korneev © {currentYear}
      </div>

      <div className="flex gap-6">
        <a
          href="https://github.com/iamkorneevgerman"
          className="text-gray-400 hover:text-accent transition-colors text-sm"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://t.me/imgerman"
          className="text-gray-400 hover:text-accent transition-colors text-sm"
          target="_blank"
        >
          Telegram
        </a>
        <a
          href="https://www.instagram.com/iamgermankorneev"
          className="text-gray-400 hover:text-accent transition-colors text-sm"
          target="_blank"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
