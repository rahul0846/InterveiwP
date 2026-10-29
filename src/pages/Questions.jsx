import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import QuestionCard from "../components/QuestionCard";

import { generateQuestions } from "../services/gemini";
import { technologyMap } from "../utils/constants";

function Questions() {
  const [questions, setQuestions] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] =
    useState("");

  const [loadingText, setLoadingText] =
    useState(
      "AI is preparing your questions..."
    );

  const selectedTechnology =
    localStorage.getItem(
      "selectedTechnology"
    );

  const selectedCategory =
    localStorage.getItem(
      "selectedCategory"
    );

  const questionCount =
    Number(
      localStorage.getItem(
        "questionCount"
      )
    ) || 10;

  // Loading Messages
  useEffect(() => {
    const messages = [
      "AI is preparing your questions...",
      "Creating personalized content...",
      "Finding the best interview questions...",
      "Almost done...",
    ];

    let i = 0;

    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setLoadingText(messages[i]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Fetch Questions
  useEffect(() => {
    const fetchQuestions =
      async () => {
    const savedQuestions =
    localStorage.getItem(
      "questions"
     );

     if (savedQuestions) {
     setQuestions(
    JSON.parse(savedQuestions)
  );

  setLoading(false);
  return;
}
        try {
          let topics = [];

          if (
            selectedCategory ===
            "technology"
          ) {
            topics =
              technologyMap[
                selectedTechnology
              ] || [];
          }

          const data =
            await generateQuestions(
              selectedTechnology,
              topics,
              questionCount
            );

          setQuestions(data);

          localStorage.setItem(
            "questions",
            JSON.stringify(data)
          );
        } catch (error) {
          console.log(
            "Questions Error:",
            error
          );
        } finally {
          setLoading(false);
        }
      };

    fetchQuestions();
  }, [
    selectedTechnology,
    selectedCategory,
    questionCount,
  ]);

  // PDF Download
  const downloadPDF = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(18);

    doc.text(
      `${selectedTechnology} Interview Questions`,
      20,
      y
    );

    y += 20;

    Object.entries(questions).forEach(
      ([topic, qs]) => {
        if (y > 260) {
          doc.addPage();
          y = 20;
        }

        doc.setFontSize(15);
        doc.text(topic, 20, y);

        y += 10;

        qs.forEach((item, index) => {
          const lines = [
            `${index + 1}. ${item.question}`,
            `Answer: ${item.answer}`,
            `Explanation: ${item.explanation}`,
            `Example 1: ${
              item.examples?.[0] || ""
            }`,
            `Example 2: ${
              item.examples?.[1] || ""
            }`,
            "--------------------------------",
          ];

          lines.forEach((line) => {
            const split =
              doc.splitTextToSize(
                line,
                170
              );

            split.forEach((txt) => {
              if (y > 280) {
                doc.addPage();
                y = 20;
              }

              doc.setFontSize(11);
              doc.text(
                txt,
                20,
                y
              );

              y += 7;
            });
          });

          y += 5;
        });
      }
    );

    doc.save(
      `${selectedTechnology}-Questions.pdf`
    );
  };

  if (loading) {
    return (
      <Loader
        text={loadingText}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="px-4 py-10 md:px-8">
        <h1 className="mb-4 text-center text-3xl font-bold md:text-5xl">
          Interview Questions
        </h1>

        <p className="mb-8 text-center text-gray-400">
          {selectedTechnology}
          {" • "}
          {questionCount}
          {" Questions"}
        </p>

        {/* PDF Button */}
        <div className="mb-10 flex justify-center">
          <button
            onClick={downloadPDF}
            className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-8 py-4 font-bold text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-105 hover:shadow-red-500/50"
          >
            <FaFilePdf className="text-2xl" />
            Download PDF
          </button>
        </div>

        {/* Search */}
        <div className="mx-auto mb-12 max-w-2xl">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-white/20 bg-slate-900 p-4 outline-none"
          />
        </div>

        {Object.entries(questions).map(
          ([topic, qs]) => (
            <div
              key={topic}
              className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:p-8"
            >
              <h2 className="mb-8 text-2xl font-bold text-cyan-400 md:text-3xl">
                {topic}
              </h2>

              <div className="space-y-8">
                {qs
                  .filter((item) =>
                    item.question
                      .toLowerCase()
                      .includes(
                        searchTerm.toLowerCase()
                      )
                  )
                  .map(
                    (
                      item,
                      index
                    ) => (
                      <QuestionCard
                        key={index}
                        item={item}
                        index={index}
                      />
                    )
                  )}
              </div>
            </div>
          )
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Questions;