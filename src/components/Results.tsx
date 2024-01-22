import { Question } from "@/types/Question";

type ResultsProps = {
  answers: number[];
  questions: Question[];
};

export const Results = ({ questions, answers }: ResultsProps) => {
  return (
    <div>
      {questions.map((question, key) => (
        <div className="mb-3" key={key}>
          <div className="font-bold">
            {key + 1}. {question.question}
          </div>
          <div>
            <span>
              {question.answer === answers[key]
                ? "Nailed it! "
                : "Wrong! The correct answer was: "}
            </span>
            <span className="italic">{question.options[question.answer]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
