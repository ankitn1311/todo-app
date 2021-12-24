import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodos } from "../../redux/actions/todos";
import Input from "../common/form/Input";
import Paper from "../common/ui/Paper";
import Todo from "./todo/Todo";
const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="flex items-start justify-center h-full p-4">
      <Paper className="w-full overflow-hidden rounded-xl sm:w-1/2 lg:w-1/3 xl:w-1/3">
        <form
          className="flex flex-col items-end gap-6 p-6 bg-teal-500/30"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("clicked");
          }}>
          <Input
            placeholder="Enter title"
            id="title"
            name="title"
            type="text"
            width="full"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            // formik={formik}
          />
          <Input
            placeholder="Enter description"
            id="description"
            name="description"
            type="text"
            width="full"
            required
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            // formik={formik}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-teal-800 rounded-lg text-slate-50 dark:text-slate-200 dark:bg-slate-800 hover:bg-slate-700 ">
            Add
          </button>
        </form>
        <div className="flex flex-col divide-y-1 divide-slate-700">
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default TodoList;
