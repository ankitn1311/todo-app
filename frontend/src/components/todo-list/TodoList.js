import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  clearCurrentTodo,
  createTodo,
  getTodos,
  updateTodo,
} from "../../redux/actions/todos";
import Input from "../common/form/Input";
import Paper from "../common/ui/Paper";
import Todo from "./todo/Todo";
const TodoList = () => {
  const { todos, currentTodo } = useSelector((state) => state.todos);

  const [initialValues, setInitialValues] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      if (currentTodo) {
        const payload = {
          _id: currentTodo._id,
          title: values.title,
          description: values.description,
        };
        dispatch(updateTodo(payload));
        dispatch(clearCurrentTodo());
      } else {
        dispatch(createTodo(values));
      }
      formik.values.title = "";
      formik.values.description = "";
    },
  });

  return (
    <div className="flex items-start justify-center h-full p-4">
      <Paper className="w-full overflow-hidden rounded-xl sm:w-1/2 lg:w-1/3 xl:w-1/3">
        <form
          className="flex flex-col items-end gap-6 p-6 bg-teal-500/30"
          onSubmit={formik.handleSubmit}>
          <Input
            placeholder="Enter title"
            id="title"
            name="title"
            type="text"
            width="full"
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            value={formik.values.title}
            formik={formik}
          />
          <Input
            placeholder="Enter description"
            id="description"
            name="description"
            type="text"
            width="full"
            required
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            value={formik.values.description}
            formik={formik}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-teal-800 rounded-lg text-slate-50 dark:text-slate-200 dark:bg-slate-800 hover:bg-slate-700 ">
            {!currentTodo ? "add" : "update"}
          </button>
        </form>
        <div className="flex flex-col divide-y-1 divide-slate-700">
          {todos.map((todo) => (
            <Todo todo={todo} changeValues={setInitialValues} />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default TodoList;
