import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import PrivateRoute from "./components/routes/private-route/PrivateRoute";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <div className="h-screen bg-slate-400 dark:bg-slate-900 text-gray-900 dark:text-gray-400 dark:bg-[url('./assets/images/background.jpg')] bg-cover">
      <Routes>
        <PrivateRoute />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <PrivateRoute path="/">
          <Layout sidebar={true}>
            <div>Hello from home</div>
          </Layout>
        </PrivateRoute> */}

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
