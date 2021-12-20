import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import Layout from "../layout/Layout";
import { loginUser, registerUser } from "../../redux/actions/auth";

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
        <form
          className="flex flex-col gap-2 w-96"
          onSubmit={formik.handleSubmit}>
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="text-green-800 px-4 py-2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-pink-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="email">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              className="text-green-800 px-4 py-2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="">
            <button
              className="bg-teal-400 text-slate-800 px-4 py-2 rounded-lg shadow-xl"
              type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
