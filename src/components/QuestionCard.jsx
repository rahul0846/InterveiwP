function QuestionCard({
  item,
  index,
}) {
  const copyQuestion = () => {
    navigator.clipboard.writeText(
      item.question
    );
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:border-cyan-400/40 hover:bg-slate-900/80">

      {/* Question */}
      <h3 className="break-words text-xl font-bold text-cyan-300 md:text-2xl">
        {index + 1}. {item.question}
      </h3>

      {/* Copy Button */}
      <button
        onClick={copyQuestion}
        className="mt-4 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400"
      >
        Copy Question
      </button>

      {/* Answer */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-green-400">
          Answer
        </h4>

        <p className="mt-2 leading-7 text-gray-300">
          {item.answer}
        </p>
      </div>

      {/* Explanation */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-yellow-400">
          Explanation
        </h4>

        <p className="mt-2 leading-7 text-gray-300">
          {item.explanation}
        </p>
      </div>

      {/* Examples */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-pink-400">
          Examples
        </h4>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          {item.examples?.map(
            (example, i) => (
              <li
                key={i}
                className="break-words"
              >
                {example}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default QuestionCard;