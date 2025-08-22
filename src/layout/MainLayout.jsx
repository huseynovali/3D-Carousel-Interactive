import React from "react";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-linear">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
