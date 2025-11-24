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
        boxSizing: "border-box",
      }}
    >
      <Logo src="/img/floradanicalogo.png" alt="Flora Danica Logo" className="logo-img" />

      {showHeader && (
        <h1 style={{ textAlign: "center", marginBottom: 24 }}>
          Find den rigtige dyne
        </h1>
      )}

      <div
        style={{
          width: "100%",
          maxWidth: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          padding: "0 16px",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default MainLayout;

