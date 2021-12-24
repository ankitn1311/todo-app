import React, { useEffect } from "react";

const Todo = ({ todo }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-4 p-6 ">
      <div className="flex flex-col start">
        <div className="font-semibold dark:text-gray-300 text-md">
          {todo.title}
        </div>
        <div className="text-sm dark:text-gray-400">{todo.description}</div>
      </div>
      <div className="flex flex-col items-end text-sm font-semibold">
        <button className="tracking-widest text-red-700 uppercase hover:text-red-500 dark:text-red-400 dark:hover:text-red-300">
          delete
        </button>
        <button className="tracking-widest text-teal-800 uppercase hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300">
          edit
        </button>
      </div>
    </div>
  );
};

export default Todo;
