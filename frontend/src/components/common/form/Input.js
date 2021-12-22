// import React from "react";

const Input = (props) => {
  const { formik, width } = props;
  const errorTouched = formik?.touched[props.name];
  const errorMessage = formik?.errors[props.name];
  const error = errorTouched && errorMessage;
  return (
    <div className={` relative flex flex-col ${width === "full" && "w-full"}`}>
      <input
        {...props}
        formik=""
        className={`px-3 py-2 w-full shadow-sm border-1   placeholder-gray-400 text-slate-700 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 bg-slate-100 focus:outline-none  focus:ring-pink-500 dark:text-slate-100 bg-transparent rounded-md  outline-none placeholder:text-xs dark:bg-slate-600  ${
          error
            ? "border-red-100 dark:border-red-200"
            : "border-slate-100 dark:border-slate-600"
        }`}
        style={{
          boxShadow:
            "inset 0px 1px 0px 0px #ffffff30, 0px 1px 4px 0px #00000039",
        }}
      />

      {error && (
        <div className="absolute mt-1 text-xs text-red-800 dark:text-red-400 top-10">
          {formik?.errors[props.name]}
        </div>
      )}
      {!error && <div></div>}
    </div>
  );
};
export default Input;
