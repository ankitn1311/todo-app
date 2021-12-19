import React from "react";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const { pathname } = location;
  console.log({ pathname });
  return (
    <nav className="bg-slate-700 h-full flex flex-row items-center">
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
    </nav>
  );
};

export default Navbar;
