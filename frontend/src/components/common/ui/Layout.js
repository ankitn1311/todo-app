import React from "react";
import Navbar from "../../Navbar";

const Layout = ({ sidebar, children }) => {
  return (
    <div className="h-full flex flex-col overflow-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
