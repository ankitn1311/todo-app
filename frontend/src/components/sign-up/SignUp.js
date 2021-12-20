import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import Layout from "../layout/Layout";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/auth";
const SignUp = () => {
  const  dispatch = useDispatch()
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
      const data = {name, email, password}
      dispatch(registerUser(data))
    },
  });
  return (
    <Layout sidebar={false}>
      <div className="h-full flex items-center justify-center">
        <form
          className="flex flex-col gap-2 w-96"
          onSubmit={formik.handleSubmit}>
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="firstName">Name</label>
            <div className="">
              <input
                id="name"
                name="name"
                type="text"
                className="text-green-800 px-4 py-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>
          </div>
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
          <div className="flex flex-row items-center justify-between">
            <label htmlFor="email">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="text"
              className="text-green-800 px-4 py-2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          <div className="">
            <button
              className="bg-purple-500 px-4 py-2 rounded-lg shadow-xl"
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
