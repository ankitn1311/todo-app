import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import PrivateRoute from "./components/routes/private-route/PrivateRoute";
import SignUp from "./components/sign-up/SignUp";
import TodoList from "./components/todo-list/TodoList";
import { fetchUser } from "./redux/actions/auth";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const checkUser = async () => {
    dispatch(fetchUser());
  };

  useEffect(() => {
    checkUser();
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <div className="h-screen bg-slate-400 dark:bg-slate-900 text-gray-900 dark:text-gray-400 dark:bg-[url('./assets/images/background.jpg')] bg-cover">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout sidebar={true}>
                <TodoList />
              </Layout>
            </PrivateRoute>
          }
        />
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
