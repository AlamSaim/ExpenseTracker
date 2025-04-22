import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0d6efd",
        padding: "1rem",
        color: "white",
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "500",
        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
      }}
    >
      © {new Date().getFullYear()} Expense Tracker By Saim Alam 💗. All rights
      reserved.
    </footer>
  );
};

export default Footer;
