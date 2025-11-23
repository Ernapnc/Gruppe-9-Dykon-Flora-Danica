import React from "react";
import Button from "../atoms/Buttons";

export type QuestionOption = { label: string };

type QuestionProps = {
  question: string;
  options: QuestionOption[];
  onSelect: (option: QuestionOption) => void;
  returKnap?: boolean;
};

const Question: React.FC<QuestionProps> = ({ question, options, onSelect }) => {
  return (
    <div style={{ textAlign: "center", marginTop: 16 }}>
      {/* Spørgsmål label */}
      <div className ="spørgsmål-label">
        {question}
      </div>

      {/* Knapper */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center", maxWidth: 300, margin: "0 auto" }}>
        {options.map((opt) => (
          <Button key={opt.label} onClick={() => onSelect(opt)} style={{ width: "100%" }}>
            {opt.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Question;

