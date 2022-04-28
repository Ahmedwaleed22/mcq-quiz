import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const styles = {
  wrapper: `w-screen h-screen flex justify-center items-center flex-col`,
  title: `text-5xl`,
  button: `bg-violet-500 text-white text-xl mt-5 py-2 px-5 rounded`,
};

function Start() {
  const { setCurrentPage } = useContext(QuizContext);

  const startQuiz = () => setCurrentPage("QUIZ");

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>MCQ Quiz</h1>
      <button onClick={startQuiz} className={styles.button}>
        Start Quiz
      </button>
    </div>
  );
}

export default Start;
