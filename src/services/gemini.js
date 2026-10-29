import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-3.5-flash",
});

export const generateQuestions = async (
  technology,
  topics = [],
  questionCount = 10
) => {
  try {
    let prompt = "";

    // MERN, Web Dev etc.
    if (topics.length > 0) {
      prompt = `
You are an interview preparation assistant.

Technology: ${technology}

Topics:
${topics.join(", ")}

Instructions:

1. Generate TOP ${questionCount} interview questions for EACH topic.
2. For every question provide:
   - question
   - answer
   - explanation
   - two simple examples
3. Use very simple and beginner-friendly English.
4. Answers should be easy to understand for beginners.
5. Explanation should be short and clear.
6. Examples should be practical.
7. Return ONLY valid JSON.
8. Do NOT return markdown.
9. Every topic should contain exactly ${questionCount} questions.

Format:

{
  "React": [
    {
      "question": "What is JSX?",
      "answer": "JSX is a syntax that lets us write HTML inside JavaScript.",
      "explanation": "JSX makes React code easier to read and write.",
      "examples": [
        "const element = <h1>Hello</h1>;",
        "const btn = <button>Click</button>;"
      ]
    }
  ]
}
`;
    } else {
      // DSA, Java, Python, Other etc.
      prompt = `
You are an interview preparation assistant.

Generate TOP ${questionCount} interview questions for:

${technology}

Instructions:

1. Generate exactly ${questionCount} interview questions.
2. For every question provide:
   - question
   - answer
   - explanation
   - two examples
3. Use simple and beginner-friendly English.
4. Answers should be easy to understand.
5. Explanation should be short and practical.
6. Examples should be real-world and easy.
7. Return ONLY valid JSON.
8. Do NOT return markdown.

Format:

{
  "${technology}": [
    {
      "question": "Question",
      "answer": "Answer",
      "explanation": "Explanation",
      "examples": [
        "Example 1",
        "Example 2"
      ]
    }
  ]
}
`;
    }

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response.text();

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedText);
  } catch (error) {
    console.log("Gemini Error:", error);
    throw error;
  }
};