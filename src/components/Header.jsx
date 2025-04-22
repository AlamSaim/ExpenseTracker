import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#0d6efd",
        padding: "1rem",
        color: "white",
        textAlign: "center",
        fontSize: "1.8rem",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      Expense Tracker
    </header>
  );
};

export default Header;
