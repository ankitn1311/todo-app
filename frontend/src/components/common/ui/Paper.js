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
      className={`bg-slate-300  dark:bg-slate-800/60 backdrop-blur-xl shadow-xl ${props.className}`}>
      {children}
    </div>
  );
};

export default Paper;
