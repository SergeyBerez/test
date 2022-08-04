import React from "react";

function Dots({ cls }) {
  let start = 99;
  let divs = [];
  while (start >= 0) {
    divs.push(start--);
  }

  return (
    <div className={`block-dots ${cls}`}>
      {divs.map(() => {
        return <div className="dots"></div>;
      })}
    </div>
  );
}

export default Dots;
