import React, { useState } from "react";
import { QUIZ } from "../../data/quiz";
import type { QuizNode, QuizOption } from "../../data/quiz";
import MainLayout from "../templates/MainLayout";
import Question from "../molecules/Question";
import ResultPage from "../pages/ResultPage";
import Button from "../atoms/Buttons";


const QuizFlow: React.FC = () => {
  const [current, setCurrent] = useState<string>("dyneType"); // startnode
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [history, setHistory] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const goBack = () => {
    setHistory((h) => {
      if (h.length === 0) return h;
      const newHist = h.slice(0, -1);
      const prev = h[h.length - 1];
      setResult(null);
      setCurrent(prev);
      return newHist;
    });
  };

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
        <div style={{ width: "100%", maxWidth: 900, margin: "0 auto 16px", display: "flex", justifyContent: "flex-start" }}>
          <Button onClick={goBack}>Tilbage</Button>
        </div>
        <ResultPage productId={result} />
      </MainLayout>
    );
  }


  const handleClick = (option: QuizOption) => {
    // gem svaret
    setAnswers((prev) => ({ ...prev, [current]: option.label }));

    // push current to history so we can go back
    setHistory((h) => [...h, current]);

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
      <div>
        <Button className="retur-knap" onClick={goBack} disabled={history.length === 0}>Tilbage</Button>
      </div>
    </MainLayout>
  );
};

export default QuizFlow;
