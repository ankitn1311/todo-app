import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useMatch,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";
import { Switch } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDark } from "../redux/actions/darkMode";
import { logout } from "../redux/actions/auth";

const Navbar = () => {
  let location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.dark);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    dispatch(toggleDark());
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex flex-row items-center gap-10 p-4 bg-slate-200 dark:bg-slate-800 font-poppins">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-teal-600 "
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

      {isAuthenticated && (
        <ul className="flex items-center flex-1 gap-5 p-3">
          <li
            className={`hover:text-teal-400 ${
              pathname === "/" && "text-teal-600 dark:text-teal-500"
            }`}>
            <Link to="/">Todos</Link>
          </li>
          {/* <li
              className={`hover:text-teal-400 ${
                pathname === "/sign-up" && "text-teal-600 dark:text-teal-500"
              }`}>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li
              className={`hover:text-teal-400 ${
                pathname === "/login" && "text-teal-600 dark:text-teal-500"
              }`}>
              <Link to="/login">Login</Link>
            </li> */}
        </ul>
      )}

      <div className="flex flex-row items-center gap-4">
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          className={`${
            darkMode
              ? "bg-teal-600 text-slate-800"
              : "bg-gray-800 text-teal-500"
          } flex p-2 justify-center items-center h-10 rounded-full w-10`}>
          <span className="sr-only">Enable dark mode</span>
          {/* <span
            className={`${
              darkMode ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-teal-600 rounded-full`}
          /> */}
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </Switch>
        {isAuthenticated && (
          <button onClick={handleLogout} className="hover:text-red-400">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
