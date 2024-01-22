import { Question } from "@/types/Question";
import { useState } from "react";

type QuestionItemProps = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({
  question,
  count,
  onAnswer,
}: QuestionItemProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);

      setTimeout(() => {
        onAnswer(key);
        setSelectedAnswer(null);
      }, 1500);
    }
  };

  return (
    <div className="">
      <div className="text-xl font-bold mb-5">
        {count}. {question.question}
      </div>
      <div className="">
        {question.options.map((option, key) => (
          <div
            key={key}
            onClick={() => checkQuestion(key)}
            className={`border border-blue-300 px-3 py-2 rounded-md mb-2 cursor-pointer bg-blue-100 hover:opacity-60 ${
              selectedAnswer !== null && "cursor-auto hover:opacity-100 "
            }
            ${
              selectedAnswer !== null &&
              selectedAnswer === question.answer &&
              selectedAnswer === key &&
              "bg-green-100 border-green-300"
            }
            ${
              selectedAnswer !== null &&
              selectedAnswer !== question.answer &&
              selectedAnswer === key &&
              "bg-red-100 border-red-300"
            }`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
