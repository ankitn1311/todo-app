import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Layout from "./components/common/ui/Layout";
import Login from "./components/Login";
import PrivateRoute from "./components/routes/PrivateRoute";
import SignUp from "./components/SignUp";
import TodoList from "./components/todo-list/TodoList";
import { fetchUser } from "./redux/actions/auth";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const checkUser = async () => {
    !isAuthenticated && (await dispatch(fetchUser()));
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    console.log({ isAuthenticated });
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen text-2xl bg-slate-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-teal-600 animate-pulse "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen bg-slate-300 dark:bg-slate-900 text-gray-900 dark:text-gray-400 dark:bg-[url('./assets/images/background.jpg')] bg-cover ">
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
