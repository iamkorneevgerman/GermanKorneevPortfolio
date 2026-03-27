import { motion } from "framer-motion";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const activeId = useScrollSpy([
    "hero",
    "about",
    "skills",
    "projects",
    "contact",
  ]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full flex items-center gap-6"
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`text-xs uppercase tracking-widest font-bold transition-colors ${
            activeId === link.id
              ? "text-accent"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {link.label}
        </a>
      ))}
    </motion.nav>
  );
}
