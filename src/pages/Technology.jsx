import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/categories";
import { motion } from "framer-motion";

function Technology() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] =
    useState("technology");

  const [selectedItem, setSelectedItem] =
    useState("");

  const [customItem, setCustomItem] =
    useState("");

  const handleGenerate = () => {
    if (!selectedItem) {
      alert("Please select an option.");
      return;
    }

    const finalValue =
      selectedItem === "Other"
        ? customItem
        : selectedItem;

    if (!finalValue.trim()) {
      alert("Please specify your topic.");
      return;
    }

    localStorage.setItem(
      "selectedTechnology",
      finalValue
    );

    localStorage.setItem(
      "selectedCategory",
      activeCategory
    );

    navigate("/questions");
  };

  const options =
    categories[activeCategory];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-center text-5xl font-bold">
          Choose Your Category 🚀
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Select your field and let AI generate
          personalized interview questions.
        </p>

        {/* Tabs */}

        <div className="mt-14 flex flex-wrap justify-center gap-6">

          <button
            onClick={() => {
              setActiveCategory(
                "technology"
              );
              setSelectedItem("");
            }}
            className={`rounded-2xl px-8 py-4 font-semibold transition ${
              activeCategory ===
              "technology"
                ? "bg-cyan-500"
                : "bg-slate-800"
            }`}
          >
            💻 Technologies
          </button>

          <button
            onClick={() => {
              setActiveCategory(
                "subject"
              );
              setSelectedItem("");
            }}
            className={`rounded-2xl px-8 py-4 font-semibold transition ${
              activeCategory ===
              "subject"
                ? "bg-cyan-500"
                : "bg-slate-800"
            }`}
          >
            📚 Subjects
          </button>

          <button
            onClick={() => {
              setActiveCategory(
                "language"
              );
              setSelectedItem("");
            }}
            className={`rounded-2xl px-8 py-4 font-semibold transition ${
              activeCategory ===
              "language"
                ? "bg-cyan-500"
                : "bg-slate-800"
            }`}
          >
            🖥 Languages
          </button>
        </div>

        {/* Cards */}

        <motion.div
          key={activeCategory}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {options.map((item) => (
            <div
              key={item}
              onClick={() =>
                setSelectedItem(item)
              }
              className={`cursor-pointer rounded-3xl border p-8 text-center transition duration-300 hover:scale-105 ${
                selectedItem === item
                  ? "border-cyan-400 bg-cyan-500/20"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <h2 className="text-xl font-semibold">
                {item}
              </h2>
            </div>
          ))}
        </motion.div>

        {/* Other */}

        {selectedItem === "Other" && (
          <div className="mx-auto mt-10 max-w-2xl">
            <input
              type="text"
              placeholder="Specify your topic..."
              value={customItem}
              onChange={(e) =>
                setCustomItem(
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-white/20 bg-slate-900 p-5 outline-none"
            />
          </div>
        )}

        {/* Button */}

        <div className="mt-14 text-center">
          <button
            onClick={handleGenerate}
            className="rounded-2xl bg-cyan-500 px-10 py-4 text-lg font-semibold transition hover:scale-110 hover:bg-cyan-400"
          >
            Generate Questions 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

export default Technology;