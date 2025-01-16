import React from "react";
import "../Verbal/Verbal.css";
import Img from "../../../assets/images/iconoir_chat-remove.svg";
function Verbal() {
  return (
    <>
      <div className="container3">
        <div className="minor_box">
          <img src={Img} alt="flash" />
          <p className="p3">Reaction</p>
        </div>
        <p className="numbers_p">
          61 <span>/ 100 </span>
        </p>
      </div>
    </>
  );
}

export default Verbal;
