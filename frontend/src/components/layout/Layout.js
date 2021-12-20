import React from "react";
import Navbar from "../navbar/Navbar";

const Layout = ({ sidebar, children }) => {
  return (
    <div className="h-full flex flex-col overflow-scroll">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
