import React, { useState } from "react";
import "./Logo.css";

export const Logo = (props) => {
    const [num,setnum]=useState(0);
  return (
    <div>
        <h6>Code Line{props.title}</h6>
        <h2>{num}</h2>

      <button onClick={() => setnum(num + 1)}>
        Click to increase
      </button>
    </div>
  );
};

export default Logo;

