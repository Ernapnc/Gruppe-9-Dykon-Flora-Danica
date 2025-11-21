import React from "react";

interface Option {
  value: string;
  label: string;
}

interface Props {
  name?: string;
  options: Option[];
  selected?: string;
  onChange: (value: string) => void;
}

const RadioOptions: React.FC<Props> = ({ name = "radio", options, selected, onChange }) => {
  return (
    <div role="radiogroup" aria-label={name} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {options.map(opt => (
        <label key={opt.value} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={selected === opt.value}
            onChange={() => onChange(opt.value)}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioOptions;
