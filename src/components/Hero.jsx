import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaFilePdf,
  FaCode,
  FaBrain,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: -40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-6 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300"
        >
          AI Powered Interview Preparation Platform
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl"
        >
          Crack Your Dream
          <span className="text-cyan-400">
            {" "}
            Tech Interview{" "}
          </span>
          With AI
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-8 max-w-3xl text-lg text-gray-300 md:text-xl"
        >
          Personalized interview questions
          for every technology stack.
          Practice smarter, boost your
          confidence, and get ready for
          your dream job with AI-powered
          preparation.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="mt-10"
        >
          <Link to="/name">
            <button className="rounded-2xl bg-cyan-500 px-10 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-110 hover:bg-cyan-400">
              Let's Get Started
            </button>
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-20 grid w-full max-w-6xl gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <FaRobot className="mx-auto mb-4 text-3xl text-cyan-400" />

            <h3 className="font-semibold">
              AI Questions
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <FaFilePdf className="mx-auto mb-4 text-3xl text-cyan-400" />

            <h3 className="font-semibold">
              PDF Download
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <FaCode className="mx-auto mb-4 text-3xl text-cyan-400" />

            <h3 className="font-semibold">
              Multiple Technologies
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
            <FaBrain className="mx-auto mb-4 text-3xl text-cyan-400" />

            <h3 className="font-semibold">
              Smart Practice
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;