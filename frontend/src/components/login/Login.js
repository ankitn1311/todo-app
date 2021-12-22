import React, { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../layout/Layout";
import { loginUser } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

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
      console.log({ values });
      const response = await dispatch(loginUser(values));
      console.log("resonse", response);
      if (response) {
        navigate("/");
      }
    },
  });

  return (
    <Layout sidebar={false}>
      <div className="flex items-center justify-center h-full">
        <form
          className="flex flex-col gap-2 w-96"
          onSubmit={formik.handleSubmit}>
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="px-4 py-2 text-green-800"
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
              className="px-4 py-2 text-green-800"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="flex items-center justify-center w-full">
            <button
              className="px-4 py-2 bg-teal-400 rounded-lg shadow-xl text-slate-800"
              type="submit">
              Login
            </button>
          </div>
          <div className="flex items-center justify-center w-full">
            Don't have a account?
            <button type="button" onClick={() => navigate("/sign-up")}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
