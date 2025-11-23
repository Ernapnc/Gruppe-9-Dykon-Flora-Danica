import React from "react";
import Logo from "../atoms/Logo";

type MainLayoutProps = {
  children: React.ReactNode;
  showHeader?: boolean;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, showHeader = true }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Logo src="public/img/floradanicalogo.png" alt="Flora Danica Logo" className="logo-img" />

      {showHeader && (
        <h1 style={{ textAlign: "center", marginBottom: 24 }}>
          Find den rigtige dyne
        </h1>
      )}

      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

