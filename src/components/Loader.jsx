function Loader({ text }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white">
      <div className="h-20 w-20 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />

      <h1 className="mt-10 text-center text-3xl font-bold">
        {text}
      </h1>

      <p className="mt-4 text-center text-gray-400">
        Please wait while AI prepares
        your interview questions.
      </p>
    </div>
  );
}

export default Loader;