import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <div className="h-screen bg-slate-400 dark:bg-slate-900 text-gray-900 dark:text-gray-400 ">
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
        <Route path="/login" element={<Login />} />
        <Route
          path="about"
          element={
            <Layout sidebar={true}>
              <div>Hello from About</div>
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
