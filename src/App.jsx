import { useContext } from "react";
import Quiz from "./components/Quiz";
import Start from "./components/Start";
import Score from "./components/Score";
import { QuizContext } from "./context/QuizContext";

function App() {
  const { currentPage } = useContext(QuizContext);

  return (
    <>
      {currentPage === "HOME" && (
        <>
          <Start />
        </>
      )}

      {currentPage === "QUIZ" && (
        <>
          <Quiz />
        </>
      )}

      {currentPage === "SCORE" && (
        <>
          <Score />
        </>
      )}
    </>
  );
}

export default App;
