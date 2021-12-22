import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import Layout from "../layout/Layout";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/auth";

import Input from "../common/form/Input";
import Paper from "../common/ui/Paper";

const SignUp = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      confirmPassword: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log({ values });
      const { confirmPassword, name, email, password } = values;
      const data = { name, email, password };
      dispatch(registerUser(data));
    },
  });
  return (
    <Layout sidebar={false}>
      <div className="flex items-center justify-center h-full">
        <Paper className="p-10 rounded-lg shadow-xl">
          <form
            className="flex flex-col gap-10 w-96"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col items-start justify-between gap-1 font-semibold">
              <label
                htmlFor="firstName"
                className="text-teal-700 dark:text-teal-500"
              >
                Name
              </label>
              <Input
                placeholder="Enter your name"
                id="name"
                name="name"
                type="text"
                width="full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                formik={formik}
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-1 font-semibold ">
              <label
                htmlFor="email"
                className="text-teal-700 dark:text-teal-500"
              >
                Email Address
              </label>
              <Input
                placeholder="@gmail.com"
                id="email"
                name="email"
                type="email"
                width="full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                formik={formik}
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-1 font-semibold">
              <label
                htmlFor="email"
                className="text-teal-700 dark:text-teal-500"
              >
                Password
              </label>

              <Input
                placeholder="password"
                id="password"
                name="password"
                type="password"
                width="full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                formik={formik}
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-1 font-semibold">
              <label
                htmlFor="email"
                className="text-teal-700 dark:text-teal-500"
              >
                Confirm Password
              </label>

              <Input
                placeholder="confirm password"
                id="confirmPassword"
                name="confirmPassword"
                width="full"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                formik={formik}
              />
            </div>

            <div className="flex items-center justify-center w-full">
              <button
                className="px-4 py-2 text-sm font-bold tracking-wide uppercase bg-teal-400 rounded-lg shadow-xl outline-none text-slate-800 active:bg-teal-600 hover:bg-teal-500 focus:ring-2 focus:ring-sky-500 focus:border-none"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </Paper>
      </div>
    </Layout>
  );
};
export default SignUp;
