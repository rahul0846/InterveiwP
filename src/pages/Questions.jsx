import { useEffect, useState } from "react";
import { generateQuestions } from "../services/gemini";
import { technologyMap } from "../utils/constants";

function Questions() {
  const [questions, setQuestions] = useState({});
  const [loading, setLoading] = useState(true);

  const selectedTechnology =
    localStorage.getItem("selectedTechnology");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const topics =
          technologyMap[selectedTechnology] || [];

        const data = await generateQuestions(
          selectedTechnology,
          topics
        );

        setQuestions(data);

        localStorage.setItem(
          "questions",
          JSON.stringify(data)
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [selectedTechnology]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <h1 className="text-3xl font-bold">
          Generating Questions... 🚀
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <h1 className="mb-12 text-center text-5xl font-bold">
        Interview Questions
      </h1>

      {Object.entries(questions).map(
        ([topic, qs]) => (
          <div
            key={topic}
            className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h2 className="mb-8 text-3xl font-bold text-cyan-400">
              {topic}
            </h2>

            <div className="space-y-8">
              {qs.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900 p-6"
                >
                  {/* Question */}
                  <h3 className="text-2xl font-bold text-cyan-300">
                    {index + 1}. {item.question}
                  </h3>

                  {/* Answer */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-green-400">
                      ✅ Answer
                    </h4>

                    <p className="mt-2 text-gray-300 leading-7">
                      {item.answer}
                    </p>
                  </div>

                  {/* Explanation */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-yellow-400">
                      💡 Explanation
                    </h4>

                    <p className="mt-2 text-gray-300 leading-7">
                      {item.explanation}
                    </p>
                  </div>

                  {/* Examples */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-pink-400">
                      📝 Examples
                    </h4>

                    <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
                      {item.examples?.map(
                        (example, i) => (
                          <li key={i}>
                            {example}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Questions;