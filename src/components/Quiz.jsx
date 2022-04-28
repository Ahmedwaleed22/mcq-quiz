import { useContext, useEffect, useState } from "react";
import { AnswerContext } from "../context/AnswerContext";
import { QuizContext } from "../context/QuizContext";

import questions from "../questions.json";

const styles = {
  wrapper: `h-screen w-screen flex justify-center flex-col w-[500px] mx-auto relative`,
  question: `text-3xl mb-2`,
  answer: `h-[50px] flex items-center border-2 my-3 px-3 rounded cursor-pointer hover:bg-violet-500 hover:text-white hover:border-0`,
  chosenAnswer: `bg-violet-500 border-0 text-white`,
  nextButton: `absolute right-20 bottom-20 bg-green-500 text-white px-7 py-2 rounded cursor-pointer`,
};

function Quiz() {
  const { correctAnswer, chosenAnswer, setCorrectAnswer, setChosenAnswer } =
    useContext(AnswerContext);
  const { score, setScore, setCurrentPage } = useContext(QuizContext);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();

  useEffect(() => {
    setScore(0);
  }, [setScore]);

  useEffect(() => {
    setQuestion(questions[questionNumber]);
  }, [questionNumber]);

  useEffect(() => {
    if (question) {
      console.log(question.answer);
      setCorrectAnswer(question.answer);
      setAnswers(question.answers);
    }
  }, [question, setCorrectAnswer]);

  const nextQuestion = () => {
    if (correctAnswer === chosenAnswer) setScore(score + 1);
    setChosenAnswer("");

    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setCurrentPage("SCORE");
    }
  };

  return (
    <div className={styles.quizPage}>
      {question && (
        <div className={styles.wrapper}>
          <h1 className={styles.question}>
            {questionNumber + 1}. {question.question}
          </h1>
          <div>
            {answers &&
              answers.map((answer, idx) => (
                <Answer key={idx} answer={answer} />
              ))}
          </div>
        </div>
      )}
      <div onClick={nextQuestion} className={styles.nextButton}>
        Next
      </div>
    </div>
  );
}

function Answer({ answer }) {
  const { chosenAnswer, setChosenAnswer } = useContext(AnswerContext);

  const chooseAnswer = () => {
    setChosenAnswer(answer);
  };

  return (
    <div
      onClick={chooseAnswer}
      className={`${styles.answer} ${
        chosenAnswer === answer ? styles.chosenAnswer : ""
      }`}
    >
      {answer}
    </div>
  );
}

export default Quiz;
