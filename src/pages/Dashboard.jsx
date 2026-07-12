import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaUniversity,
  FaGraduationCap,
  FaBriefcase,
  FaVenusMars,
} from "react-icons/fa";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else if (hour < 18) {
    greeting = "Good Afternoon 🌤️";
  }

  const cards = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: user?.email || "Not Provided",
    },
    {
      icon: <FaUniversity />,
      title: "College",
      value: user?.college,
    },
    {
      icon: <FaGraduationCap />,
      title: "Branch",
      value: user?.branch,
    },
    {
      icon: <FaBriefcase />,
      title: "Experience",
      value: user?.experience,
    },
    {
      icon: <FaVenusMars />,
      title: "Gender",
      value: user?.gender,
    },
    {
      icon: <FaUser />,
      title: "Year",
      value: user?.year,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Glow */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative z-10 px-6 py-14">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-6xl"
        >
          {/* Welcome */}
          <div className="text-center">
            <h2 className="text-xl text-cyan-400">
              {greeting}
            </h2>

            <h1 className="mt-4 text-5xl font-bold">
              Welcome, {user?.name} 👋
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
              Your personalized AI interview preparation journey starts now.
              Practice with AI-generated questions and prepare for your dream job.
            </p>
          </div>

          {/* User Details */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="mb-4 text-3xl text-cyan-400">
                  {card.icon}
                </div>

                <h3 className="text-gray-400">
                  {card.title}
                </h3>

                <p className="mt-2 text-xl font-semibold">
                  {card.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-14 text-center">
            <p className="text-lg italic text-gray-400">
              "Success in interviews isn't luck. It's preparation."
            </p>
          </div>

          {/* Button */}
          <div className="mt-12 text-center">
            <Link to="/technology">
              <button className="rounded-2xl bg-cyan-500 px-10 py-4 text-lg font-semibold transition hover:scale-110 hover:bg-cyan-400">
                Start Interview Preparation 🚀
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;