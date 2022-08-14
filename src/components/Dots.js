import React from "react";
import style from "./Dots.module.css";
function Dots({ cls }) {
  let start = 99;
  let divs = [];
  while (start >= 0) {
    divs.push(start--);
  }
  console.log(cls);
  return (
    <div className={cls ? style["block-dots-down"] : style["block-dots"]}>
      {divs.map((i) => {
        return <div key={i} className={style.dots}></div>;
      })}
    </div>
  );
}

export default Dots;
