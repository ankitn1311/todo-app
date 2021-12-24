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
      <Paper className="w-full px-6 py-6 rounded-xl sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <form
          className="flex flex-col gap-1"
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
          <button type="submit"></button>
        </form>
        <div className="flex flex-col mt-3 divide-y-1 divide-slate-700">
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default TodoList;
