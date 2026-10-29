import {
  FaUser,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";

function WelcomeCard({
  name,
  branch,
  college,
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Welcome, {name}
          </h2>

          <p className="mt-3 text-gray-400">
            Get ready to practice and
            improve your interview skills
            with AI-powered preparation.
          </p>
        </div>

        <div className="rounded-2xl bg-cyan-500/10 p-6">
          <FaUser className="text-5xl text-cyan-400" />
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl bg-slate-900 p-5">
          <div className="flex items-center gap-3">
            <FaGraduationCap className="text-cyan-400" />

            <span className="text-gray-400">
              Branch
            </span>
          </div>

          <h3 className="mt-3 text-lg font-semibold">
            {branch || "Not Provided"}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-900 p-5">
          <div className="flex items-center gap-3">
            <FaBuilding className="text-cyan-400" />

            <span className="text-gray-400">
              College
            </span>
          </div>

          <h3 className="mt-3 text-lg font-semibold">
            {college || "Not Provided"}
          </h3>
        </div>

      </div>
    </div>
  );
}

export default WelcomeCard;