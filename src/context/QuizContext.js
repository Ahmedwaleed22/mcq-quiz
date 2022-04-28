import { useState, createContext } from "react";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("HOME");
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider
      value={{ currentPage, setCurrentPage, score, setScore }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
