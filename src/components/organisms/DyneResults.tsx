import React, { useState } from "react";
import DyneCard from "../molecules/DyneCard";
import ComparisonView from "../organisms/ComparisonView";
import type { Dyne } from "../../data/types";
import products from "../../data/dyner.json";

type DyneResultsProps = {
  result: Dyne;
};

const DyneResults: React.FC<DyneResultsProps> = ({ result }) => {
  const [selectedDyne, setSelectedDyne] = useState<Dyne | null>(null);


  const otherDyner = products.filter((d) => d.id !== result.id);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>


      <h1 style={{ margin: "20px 0" }}>Din anbefalede dyne</h1>


      <DyneCard dyne={result} />

      {/* Hvis man har valgt en dyne til sammenligning */}
      {selectedDyne && (
        <>
          <h2 style={{ marginTop: 40 }}>Sammenligning</h2>
          <ComparisonView dyne1={result} dyne2={selectedDyne} />
        </>
      )}

      {/* Andre dyner i mindre format */}
      <h3 style={{ marginTop: 40 }}>Andre dyner, du kan sammenligne med:</h3>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        {otherDyner.map((dyne) => (
          <div
            key={dyne.id}
            style={{ width: 150, cursor: "pointer" }}
            tabIndex={0}
            onClick={() => setSelectedDyne(dyne)}
            onKeyDown={(e) => e.key === "Enter" && setSelectedDyne(dyne)}
          >
            <DyneCard dyne={dyne} showDescription={false} /> {/* beskrivelse skjult */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DyneResults;



