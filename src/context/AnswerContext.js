import { useState, createContext } from "react";

export const AnswerContext = createContext();

const AnswerProvider = ({ children }) => {
  const [correctAnswer, setCorrectAnswer] = useState();
  const [chosenAnswer, setChosenAnswer] = useState();

  return (
    <AnswerContext.Provider
      value={{ chosenAnswer, setChosenAnswer, correctAnswer, setCorrectAnswer }}
    >
      {children}
    </AnswerContext.Provider>
  );
};

export default AnswerProvider;
