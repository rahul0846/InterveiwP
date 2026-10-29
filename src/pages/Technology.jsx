import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TechCard from "../components/TechCard";

import { categories } from "../data/categories";

function Technology() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] =
    useState("technology");

  const [selectedItem, setSelectedItem] =
    useState("");

  const [customItem, setCustomItem] =
    useState("");

  const [questionCount, setQuestionCount] =
    useState(10);

  const handleGenerate = () => {
    if (!selectedItem) {
      alert("Please select an option.");
      return;
    }

    const finalValue =
      selectedItem === "Other"
        ? customItem.trim()
        : selectedItem;

    if (!finalValue) {
      alert("Please specify your topic.");
      return;
    }

    let count = questionCount;

    if (
      activeCategory === "subject" ||
      activeCategory === "language"
    ) {
      count = 30;
    }

    if (selectedItem === "Other") {
      count = 30;
    }

    localStorage.setItem(
      "selectedTechnology",
      finalValue
    );

    localStorage.setItem(
      "selectedCategory",
      activeCategory
    );

    localStorage.setItem(
      "questionCount",
      count
    );
    localStorage.removeItem(
     "questions"
    );

    navigate("/questions");
  };

  const options =
    categories[activeCategory];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-12">

        <h1 className="text-center text-4xl font-bold md:text-5xl">
          Choose Your Category
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Select your field and let AI
          generate personalized interview
          questions.
        </p>

        {/* Tabs */}

        <div className="mt-14 flex flex-wrap justify-center gap-4 md:gap-6">

          <button
            onClick={() => {
              setActiveCategory(
                "technology"
              );
              setSelectedItem("");
              setCustomItem("");
            }}
            className={`rounded-2xl px-8 py-4 font-semibold transition ${
              activeCategory ===
              "technology"
                ? "bg-cyan-500 text-black"
                : "bg-slate-800"
            }`}
          >
            Technologies
          </button>

          <button
            onClick={() => {
              setActiveCategory(
                "subject"
              );
              setSelectedItem("");
              setCustomItem("");
            }}
            className={`rounded-2xl px-8 py-4 font-semibold transition ${
              activeCategory ===
              "subject"
                ? "bg-cyan-500 text-black"
                : "bg-slate-800"
            }`}
          >
            Subjects
          </button>

          <button
            onClick={() => {
              setActiveCategory(
                "language"
              );
              setSelectedItem("");
              setCustomItem("");
            }}
            className={`rounded-2xl px-8 py-4 font-semibold transition ${
              activeCategory ===
              "language"
                ? "bg-cyan-500 text-black"
                : "bg-slate-800"
            }`}
          >
            Languages
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
          className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-3"
        >
          {options.map((item) => (
            <TechCard
              key={item}
              item={item}
              selected={
                selectedItem === item
              }
              onClick={() =>
                setSelectedItem(item)
              }
            />
          ))}
        </motion.div>

        {/* Other Input */}

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

        {/* Question Count */}

        {activeCategory ===
          "technology" &&
          selectedItem !== "Other" && (
            <div className="mt-12">

              <h3 className="mb-6 text-center text-2xl font-bold">
                How many questions do
                you want?
              </h3>

              <div className="flex flex-wrap justify-center gap-4">

                {[10, 20, 30].map(
                  (count) => (
                    <button
                      key={count}
                      onClick={() =>
                        setQuestionCount(
                          count
                        )
                      }
                      className={`rounded-2xl px-8 py-4 font-semibold transition ${
                        questionCount ===
                        count
                          ? "bg-cyan-500 text-black"
                          : "bg-slate-800"
                      }`}
                    >
                      {count}
                    </button>
                  )
                )}

              </div>
            </div>
          )}

        {/* Generate Button */}

        <div className="mt-14 text-center">
          <button
            onClick={handleGenerate}
            className="rounded-2xl bg-cyan-500 px-10 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
          >
            Generate Questions
          </button>
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Technology;