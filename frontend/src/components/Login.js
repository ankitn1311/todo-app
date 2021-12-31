import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { LOADING, loginUser } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";

import Layout from "./common/ui/Layout";
import Paper from "./common/ui/Paper";
import Input from "./common/form/Input";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const [buttonLoading, setButtonLoading] = useState(false);

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
    onSubmit: async (values) => {
      setButtonLoading(true);
      console.log({ values });
      const response = await dispatch(loginUser(values));
      console.log("response", response);
      setButtonLoading(false);
      if (response) {
        navigate("/");
      }
    },
  });

  return (
    <Layout sidebar={false}>
      <div className="flex items-center justify-center w-full h-full p-3">
        <Paper className="flex flex-col items-center justify-center w-full max-w-lg p-10 rounded-lg shadow-xl">
          <h3 className="mb-5 text-xl font-semibold text-center text-gray-500 dark:text-gray-300">
            Welcome Back!
          </h3>
          <form
            className="flex flex-col w-full gap-6"
            onSubmit={formik.handleSubmit}>
            <div className="flex flex-col items-start justify-between gap-1 font-semibold">
              <label
                htmlFor="email"
                className="text-teal-700 dark:text-teal-500">
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
                className="text-teal-700 dark:text-teal-500">
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

            <div className="flex flex-col items-center justify-center w-full">
              <button
                className="px-4 py-2 text-sm font-bold tracking-wide uppercase bg-teal-400 rounded-lg shadow outline-none text-slate-800 active:bg-teal-600 hover:bg-teal-500 focus:ring focus:ring-sky-500 focus:outline-none"
                type="submit">
                {buttonLoading ? "Loading..." : "Login"}
              </button>
              <p className="font-semibold text-red-400 text-md">{error}</p>
            </div>
            <div className="flex items-center justify-center w-full gap-2">
              <span className="text-md text-slate-700 dark:text-slate-300">
                Don't have a account?
              </span>
              <button
                type="button"
                className="font-bold text-blue-500 hover:text-blue-400"
                onClick={() => navigate("/sign-up")}>
                Sign Up
              </button>
            </div>
          </form>
        </Paper>
      </div>
    </Layout>
  );
};

export default Login;
