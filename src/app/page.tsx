"use client";

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

export default function Home() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const title = "Cooking Quiz";

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  };

  const handleRestartQuiz = () => {
    setShowResult(false);
    setAnswers([]);
    setCurrentQuestion(0);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 from-20% to-blue-800 to-90%">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">
          {title}
        </div>
        <div className="p-5">
          {!showResult && (
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswer}
            />
          )}
          {showResult && <Results questions={questions} answers={answers} />}
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} of ${questions.length} question${
              questions.length <= 1 ? "" : "s"
            }`}
          {showResult && (
            <button
              onClick={handleRestartQuiz}
              className="px-3 py-2 rounded-md bg-blue-800 text-white hover:bg-blue-600"
            >
              Restart quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
