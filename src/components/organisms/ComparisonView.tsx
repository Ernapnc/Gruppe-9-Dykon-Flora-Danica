import React from "react";
import type { Dyne } from "../../data/types";

type ComparisonViewProps = {
  dyne1: Dyne;
  dyne2: Dyne;
};

const ComparisonView: React.FC<ComparisonViewProps> = ({ dyne1, dyne2 }) => {
  // Felter der sammenlignes
  const fields: (keyof Dyne)[] = [
    "name",
    "dimensions",
    "fillType",
    "warmth",
    "season",
    "fillWeight",
    "coolingEffect",
    "weightPreference",
    "garanti",
  ];

  // Dansk oversættelse
  const labels: Record<string, string> = {
    name: "Navn",
    dimensions: "Mål",
    fillType: "Fyldtype",
    warmth: "Varmegrad",
    season: "Årstid",
    fillWeight: "Fyldvægt",
    coolingEffect: "Køleeffekt",
    weightPreference: "Vægtpræference",
    garanti: "Garanti",
  };

  return (
    <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
      <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8, minWidth: 250 }}>
        <h4 style={{ textAlign: "center" }}>{dyne1.name}</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {fields.map((field) => (
            <li key={field}>
              <strong>{labels[field]}:</strong> {dyne1[field]}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8, minWidth: 250 }}>
        <h4 style={{ textAlign: "center" }}>{dyne2.name}</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {fields.map((field) => (
            <li
              key={field}
              style={{
                backgroundColor:
                  dyne1[field] == dyne2[field] ? "#8F993D" : "transparent",
              }}
            >
              <strong>{labels[field]}:</strong> {dyne2[field]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComparisonView;
