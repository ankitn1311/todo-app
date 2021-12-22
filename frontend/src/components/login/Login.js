import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import Layout from "../layout/Layout";
import { loginUser, registerUser } from "../../redux/actions/auth";

import Input from "../common/form/Input";
import Paper from "../common/ui/Paper";

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log({ values });
      dispatch(loginUser(values));
    },
  });

  return (
    <Layout sidebar={false}>
      <div className="h-full flex items-center justify-center">
        <Paper className="p-10 rounded-lg shadown-xl">
          <form
            className="flex flex-col gap-2 w-96"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-row items-center justify-between my-4">
              <label htmlFor="email">Email Address</label>
              <Input
                placeholder="@mail.com"
                id="email"
                name="email"
                type="email"
                className="text-green-800 px-4 py-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                formik={formik}
              />
            </div>
            <div className="flex flex-row items-center justify-between gap-1 my-2">
              <label htmlFor="email">Password</label>
              <Input
                placeholder="Enter password"
                id="password"
                name="password"
                type="text"
                className="text-green-800 px-4 py-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                formik={formik}
              />
            </div>
            <div className="flex items-center justify-center w-full m-2">
              <button
                className="px-4 py-2 text-sm font-bold tracking-wide uppercase bg-teal-400 rounded-lg shadow-xl outline-none text-slate-800 active:bg-teal-600 hover:bg-teal-500 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </Paper>
      </div>
    </Layout>
  );
};

export default Login;
