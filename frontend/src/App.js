import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <div className="min-h-screen bg-slate-800 text-gray-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Hello from home</div>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="about" element={<div>Hello from about</div>} />
      </Routes>
    </div>
  );
}

export default App;
