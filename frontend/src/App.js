import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/sign-up/SignUp";
import { Provider } from 'react-redux';
import store from './redux/store/index';

function App() {
  return (
    <div className="min-h-screen bg-slate-800 text-gray-300">
    <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Hello from home</div>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="about" element={<div>Hello from about</div>} />
        </Routes>
    </Provider>
      </div>

  );
}

export default App;
