import React, { useEffect, useState } from "react";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDark } from "../../redux/actions/darkMode";

const Navbar = () => {
  let location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const {darkMode} = useSelector((state)=> state.dark)
  console.log({ pathname });

  const toggleDarkMode = () => {
     dispatch(toggleDark())
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-slate-300 dark:bg-slate-700 flex flex-row items-center">
      <div className="text-3xl p-2">Todo-app</div>
      <ul className="p-3 flex items-center gap-3 ">
        <li
          className={`hover:text-pink-500 ${
            pathname === "/" && "text-blue-500"
          }`}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={`hover:text-pink-500 ${
            pathname === "/sign-up" && "text-green-500"
          }`}>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li
          className={`hover:text-pink-500 ${
            pathname === "/about" && "text-yellow-500"
          }`}>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        className={`${
          darkMode ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11`}>
        <span className="sr-only">Enable dark mode</span>
        <span
          className={`${
            darkMode ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
    </nav>
  );
};

export default Navbar;
