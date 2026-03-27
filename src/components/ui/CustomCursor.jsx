import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();

  return (
    <div className="custom-cursor">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[9999]"
        animate={{ x: x - 16, y: y - 16 }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999]"
        animate={{ x: x - 3, y: y - 3 }}
      />
    </div>
  );
}
