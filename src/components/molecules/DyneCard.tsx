import React from "react";
import type { Dyne } from "../../data/types";

interface DyneCardProps {
  dyne: Dyne;
  showDescription?: boolean; // ny prop til at styre om beskrivelsen vises
}

const DyneCard: React.FC<DyneCardProps> = ({ dyne, showDescription = true }) => {
  return (
    <article style={{ border: "1px solid #fff7f7ff", padding: 12, borderRadius: 8, marginBottom: 12 }}>
      {dyne.image && (
        <img src={dyne.image} alt={dyne.name} style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
      )}

      <h3>{dyne.name} <small style={{ fontWeight: 400 }}>({dyne.dimensions})</small></h3>

      {showDescription && dyne.description && (
        <p style={{ fontStyle: "italic", margin: "8px 0" }}>{dyne.description}</p>
      )}
    </article>
  );
};

export default DyneCard;

