import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-3.5-flash",
});

export const generateQuestions = async (
  technology,
  topics = []
) => {
  try {
    let prompt = "";

    if (topics.length > 0) {
      prompt = `
You are an interview preparation assistant.

Technology: ${technology}

Topics:
${topics.join(", ")}

Instructions:

1. Generate TOP 10 interview questions for EACH topic.
2. For every question provide:
   - question
   - answer
   - explanation
   - two simple examples
3. Use very simple and beginner-friendly English.
4. Answers should be easy to understand.
5. Explanation should be short.
6. Examples should be practical.
7. Return ONLY valid JSON.
8. Do NOT return markdown.

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
  ],

  "MongoDB": [
    {
      "question": "What is MongoDB?",
      "answer": "MongoDB is a NoSQL database that stores data in documents.",
      "explanation": "It stores data in JSON-like format.",
      "examples": [
        "{ name: 'Rahul', age: 22 }",
        "{ title: 'React Book', price: 500 }"
      ]
    }
  ]
}
`;
    } else {
      prompt = `
You are an interview preparation assistant.

Generate TOP 10 interview questions for:

${technology}

For every question provide:

- question
- answer
- explanation
- two examples

Use very simple English.

Return ONLY valid JSON.

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