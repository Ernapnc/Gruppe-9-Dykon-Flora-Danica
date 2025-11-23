import React from "react";

type LogoProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <img
        src={src}
        alt={alt || "Logo"}
        className="logo-img"
        style={{ width: "90%" }}
      />
    </div>
  );
};

export default Logo;
