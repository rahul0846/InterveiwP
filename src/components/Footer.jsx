import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row">

        <div>
          <h2 className="text-xl font-bold text-cyan-400">
            AI Interview Prep
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Practice smarter with
            AI-powered interview
            preparation.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-gray-400 transition hover:text-cyan-400"
          >
            <FaGithub className="text-2xl" />
          </a>

          <a
            href="#"
            className="text-gray-400 transition hover:text-cyan-400"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        Built with React, Tailwind CSS
        and Gemini AI.
      </div>
    </footer>
  );
}

export default Footer;