import React, { useState } from "react";
import { QUIZ } from "../../data/quiz";
import type { QuizNode, QuizOption } from "../../data/quiz";
import MainLayout from "../templates/MainLayout";
import Question from "../molecules/Question";
import ResultPage from "../pages/ResultPage";


const QuizFlow: React.FC = () => {
  const [current, setCurrent] = useState<string>("dyneType"); // startnode
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);

  // find nuværende node
  const node: QuizNode | undefined = QUIZ[current];

  // fallback hvis node ikke findes
  if (!node) {
    return (
      <MainLayout>
        <p>Fejl: Ukendt spørgsmål eller resultat "{current}"</p>
      </MainLayout>
    );
  }

  // vis resultat hvis det findes
  if (result) {
    return (
      <MainLayout showHeader={false}>
        <ResultPage productId={result} />
      </MainLayout>
    );
  }


  const handleClick = (option: QuizOption) => {
    // gem svaret
    setAnswers((prev) => ({ ...prev, [current]: option.label }));


    if (option.result) {
      const resultString =
        typeof option.result === "function"
          ? option.result({ ...answers, [current]: option.label })
          : option.result;

      setResult(resultString || "Ukendt resultat");
      return;
    }


    if (option.next) {
      setCurrent(option.next);
      return;
    }


    setResult("Ukendt resultat");
  };

  return (
    <MainLayout>
      {node.question && (
        <Question
          question={node.question!} // non-null assertion
          options={node.options || []}
          onSelect={handleClick}
        />
      )}
    </MainLayout>
  );
};

export default QuizFlow;
