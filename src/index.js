import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import QuizProvider from "./context/QuizContext";
import AnswerProvider from "./context/AnswerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <AnswerProvider>
        <App />
      </AnswerProvider>
    </QuizProvider>
  </React.StrictMode>
);
