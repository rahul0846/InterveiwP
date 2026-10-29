import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-cyan-500 p-2">
            <FaRobot className="text-xl text-black" />
          </div>

          <h1 className="text-xl font-bold text-cyan-400 md:text-2xl">
            AI Interview Prep
          </h1>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-4 text-sm font-medium md:gap-8 md:text-base">
          <Link
            to="/"
            className="transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="transition hover:text-cyan-400"
          >
            Dashboard
          </Link>

          <Link
            to="/technology"
            className="rounded-xl bg-cyan-500 px-4 py-2 text-black transition hover:bg-cyan-400"
          >
            Start
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;