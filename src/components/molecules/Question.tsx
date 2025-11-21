import React from "react";
import Button from "../atoms/Buttons";

export type QuestionOption = { label: string };

type QuestionProps = {
  question: string;
  options: QuestionOption[];
  onSelect: (option: QuestionOption) => void;
};

const Question: React.FC<QuestionProps> = ({ question, options, onSelect }) => {
  return (
    <div style={{ textAlign: "center", marginTop: 16 }}>
      {/* Spørgsmål label */}
      <div
        style={{
          padding: "12px 24px",
          backgroundColor: "#870338",
          color: "white",
          borderRadius: 6,
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        Spørgsmål
      </div>

      {/* Selve spørgsmålet */}
      <h3 style={{ marginBottom: 24 }}>{question}</h3>

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

