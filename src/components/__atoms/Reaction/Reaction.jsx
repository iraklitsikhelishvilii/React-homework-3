import React from "react";
import "../Reaction/Reaction.css";
import Img from "../../../assets/images/iconoir_flash.svg";

function Reation() {
  return (
    <>
      <div className="container">
        <div className="minor_box">
          <img src={Img} alt="flash" />
          <p className="p1">Reaction</p>
        </div>
        <p className="numbers_p">
          80 <span>/ 100 </span>
        </p>
      </div>
    </>
  );
}

export default Reation;
