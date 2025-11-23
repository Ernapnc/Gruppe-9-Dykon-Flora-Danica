import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, style, disabled, ...props }) => {
  return (
    <button {...props}
      onClick={onClick}
      style={{
        padding: "12px 24px",
        borderRadius: 6,
        border: "var(--button-border, 1px solid black)",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: "bold",
        outline: "none",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
      disabled={disabled}
      // Synlig fokus, når man tabber
      onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,0,255,0.5)")}
      onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      {children}
    </button>
  );
};

export default Button;


