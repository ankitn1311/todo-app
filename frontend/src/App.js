import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <div className="h-screen bg-slate-100 dark:bg-slate-800 text-gray-800 dark:text-gray-300 ">
      <Routes>
        <Route
          path="/"
          element={
            <Layout sidebar={true}>
              <div>Hello from home</div>
            </Layout>
          }
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="about" element={<div>Hello from about</div>} />
      </Routes>
    </div>
  );
}

export default App;
