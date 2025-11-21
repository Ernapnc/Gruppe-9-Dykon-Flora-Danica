import React from "react";

type LogoProps = {
  src: string;
  alt?: string;
};

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "24px" }}>
      <img
        src={src}
        alt={alt || "Logo"}
        style={{ width: "90%" }}
      />
    </div>
  );
};

export default Logo;
