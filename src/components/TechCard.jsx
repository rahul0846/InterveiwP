import { motion } from "framer-motion";

function TechCard({
  item,
  selected,
  onClick,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className={`cursor-pointer rounded-3xl border p-8 text-center transition duration-300 ${
        selected
          ? "border-cyan-400 bg-cyan-500/20 shadow-lg shadow-cyan-500/20"
          : "border-white/10 bg-white/5 hover:border-cyan-400/40"
      }`}
    >
      <h2 className="text-xl font-semibold">
        {item}
      </h2>

      {selected && (
        <p className="mt-3 text-sm text-cyan-300">
          Selected
        </p>
      )}
    </motion.div>
  );
}

export default TechCard;