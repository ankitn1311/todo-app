import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import Layout from "../layout/Layout";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/auth";

import Input from "../common/input/Input";

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
      <div className="h-full flex items-center justify-center">
        <form
          className="flex flex-col gap-2 w-96"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="firstName">Name</label>
            <div className="relative">
              <Input
                placeholder={"Enter your name"}
                id={"name"}
                name={"name"}
                type={"text"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.name && formik.errors.name ? (
                <>
                  <div className=" border-2 border-red-500 w-52 h-1 mx-2 absolute inset-y-11 rounded-md z-30"></div>
                  <div className="text-red-500  translate-x-52 w-52 mx-2 absolute inset-3">
                    {formik.errors.name}
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="email">Email Address</label>
            <div className="relative">
              <Input
                placeholder={"@gmail.com"}
                id={"email"}
                name={"email"}
                type={"email"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              {formik.touched.email && formik.errors.email ? (
                <>
                  <div className=" border-2 border-red-500 w-52 h-1 mx-2 absolute inset-y-11 rounded-md z-30"></div>
                  <div className="text-red-500  translate-x-52 w-52 mx-2 absolute inset-3">
                    {formik.errors.email}
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="email">Password</label>
            <div className="relative">
              <Input
                placeholder={"password"}
                id={"password"}
                name={"password"}
                type={"text"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.password && formik.errors.password ? (
                <>
                  <div className=" border-2 border-red-500 w-52 h-1 mx-2 absolute inset-y-11 rounded-md z-30"></div>
                  <div className="text-red-500  translate-x-52 w-52 mx-2 absolute inset-3">
                    {formik.errors.password}
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="email">Confirm Password</label>
            <div className="relative">
              <Input
                placeholder={"confirm password"}
                id={"confirmPassword"}
                name={"confirmPassword"}
                type={"text"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <>
                  <div className=" border-2 border-red-500 w-52 h-1 mx-2 absolute inset-y-11 rounded-md z-30"></div>
                  <div className="text-red-500  translate-x-52 w-52 mx-2 absolute inset-3">
                    {formik.errors.confirmPassword}
                  </div>
                </>
              ) : null}
            </div>
          </div>

          <div className="">
            <button
              className="bg-teal-400 text-slate-800 px-4 py-2 rounded-lg shadow-xl"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
