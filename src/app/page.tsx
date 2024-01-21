"use client";

import { questions } from "@/data/questions";
import { useState } from "react";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const title = "Cooking Quiz";

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">
          {title}
        </div>
        <div className="p-5">...</div>
        <div className="p-5 text-center border-t border-gray-300">
          {currentQuestion} of {questions.length} question
          {questions.length <= 1 ? "" : "s"}
        </div>
      </div>
    </div>
  );
}
