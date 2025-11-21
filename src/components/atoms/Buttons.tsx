import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 24px",
        borderRadius: 6,
        border: "1px solid black",
        cursor: "pointer",
        fontWeight: "bold",
        outline: "none",
        ...style,
      }}
      // Synlig fokus, når man tabber
      onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,0,255,0.5)")}
      onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      {children}
    </button>
  );
};

export default Button;


