import React from "react";
import Img from "../../../assets/images/iconoir_brain.svg";
import "../Memory/Memory.css";
function Memory() {
  return (
    <>
      <div className="container2">
        <div className="minor_box">
          <img src={Img} alt="brain" />
          <p className="p2">Memory</p>
        </div>
        <p className="numbers_p">
          92 <span>/ 100 </span>
        </p>
      </div>
    </>
  );
}

export default Memory;
