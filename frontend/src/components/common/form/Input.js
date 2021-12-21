// import React from "react";

const Input = (props) => {
  const { formik, width } = props;
  const errorTouched = formik?.touched[props.name];
  const errorMessage = formik?.errors[props.name];
  const error = errorTouched && errorMessage;
  console.log({
    errorTouched,
    errorMessage,
    name: props.name,
    formik: formik?.touched,
  });
  return (
    <div className={` relative flex flex-col ${width === "full" && "w-full"}`}>
      <input
        {...props}
        formik=""
        // px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none
        className={`px-3 py-2 w-full shadow-sm placeholder-gray-400 text-slate-700  disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 dark:text-slate-100 bg-transparent rounded-md border-1 outline-none placeholder:text-xs   ${
          error ? "border-red-400" : "border-slate-400 dark:border-slate-600"
        }`}
      />

      {error && (
        <div className="absolute top-10 text-sm mt-1 text-red-400">
          {formik?.errors[props.name]}
        </div>
      )}
      {!error && <div></div>}
    </div>
  );
};
export default Input;
