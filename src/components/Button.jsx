function Button({
  children,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl bg-cyan-500 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-cyan-400 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;