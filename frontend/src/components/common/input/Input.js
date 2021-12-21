// import React from "react";

const Input = (props) => {
  console.log("checking props", props);
  console.log("required", props.onBlur);
  return (
    <div className="w-52 h-10 input-field m-2 rounded-md bg-white z-3 border-2 ">
      <input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        required
        className="w-full h-full text-black p-4 bg-transparent rounded-md border-none outline-none 
          placeholder:text-xs placeholder-gray-500
        "
      />
    </div>
  );
};
export default Input;
