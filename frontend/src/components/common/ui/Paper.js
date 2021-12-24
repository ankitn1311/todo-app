import React from "react";

const Paper = (props) => {
  const { children, level } = props;
  switch (level) {
    case 1:
      return;
  }
  return (
    <div
      //dark:ring-1 dark:ring-inset dark:ring-white/10
      className={`bg-slate-200  dark:bg-slate-800/60 backdrop-blur-xl shadow-xl ${props.className}`}
      style={{
        boxShadow: "inset 0px 1px 0px 0px #ffffff30, 0px 1px 4px 0px #00000039",
      }}>
      {children}
    </div>
  );
};

export default Paper;
