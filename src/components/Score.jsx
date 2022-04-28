import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

import questions from "../questions.json";

const styles = {
  wrapper: `w-screen h-screen flex justify-center items-center flex-col`,
  title: `text-5xl`,
  button: `bg-violet-500 text-white text-xl mt-5 py-2 px-5 rounded`,
};

function Score() {
  const { setCurrentPage } = useContext(QuizContext);
  const { score } = useContext(QuizContext);

  const repeatQuiz = () => setCurrentPage("QUIZ");

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Score: {score}/{questions.length}
      </h1>
      <button onClick={repeatQuiz} className={styles.button}>
        Repeat Quiz
      </button>
    </div>
  );
}

export default Score;
