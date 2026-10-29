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

import Navbar from "../components/Navbar";
import WelcomeCard from "../components/WelcomeCard";
import IntroCard from "../components/IntroCard";
import Footer from "../components/Footer";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  const cards = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value:
        user?.email ||
        "Not Provided",
    },
    {
      icon: <FaUniversity />,
      title: "College",
      value:
        user?.college ||
        "Not Provided",
    },
    {
      icon: <FaGraduationCap />,
      title: "Branch",
      value:
        user?.branch ||
        "Not Provided",
    },
    {
      icon: <FaBriefcase />,
      title: "Experience",
      value:
        user?.experience ||
        "Not Provided",
    },
    {
      icon: <FaVenusMars />,
      title: "Gender",
      value:
        user?.gender ||
        "Not Provided",
    },
    {
      icon: <FaUser />,
      title: "Year",
      value:
        user?.year ||
        "Not Provided",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="relative z-10">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 py-12">

          {/* Welcome */}
          <WelcomeCard
            name={user?.name}
            branch={user?.branch}
            college={user?.college}
            greeting={greeting}
          />

          {/* User Details */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map(
              (card, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.04,
                    y: -5,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <div className="mb-5 text-3xl text-cyan-400">
                    {card.icon}
                  </div>

                  <h3 className="text-sm uppercase tracking-wide text-gray-400">
                    {card.title}
                  </h3>

                  <p className="mt-3 break-words text-lg font-semibold md:text-xl">
                    {card.value}
                  </p>
                </motion.div>
              )
            )}
          </div>

          {/* Quote */}
          <div className="mt-20 text-center">
            <p className="mx-auto max-w-3xl text-lg italic text-gray-400">
              "Success in interviews is not luck.
              It is preparation, consistency and confidence."
            </p>
          </div>

          {/* Button */}
          <div className="mt-12 text-center">
            <Link to="/technology">
              <button className="rounded-2xl bg-cyan-500 px-10 py-4 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-400">
                Start Interview Preparation
              </button>
            </Link>
          </div>

          {/* About Platform */}
          <div className="mt-24">
            <IntroCard />
          </div>

        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;