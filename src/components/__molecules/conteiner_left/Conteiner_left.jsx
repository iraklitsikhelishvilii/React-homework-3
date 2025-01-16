import React from "react";
import "../conteiner_left/Conteiner_left.css";
import Round_div from "../../__atoms/Round_div/Round_div";

function Conteiner_left() {
  return (
    <>
      <div className="conteiner_left">
        <h1 className="conteiner_left_h">Your Result</h1>
        <Round_div />
        <h2 className="conteiner_left_h2">Great</h2>
        <p className="conteiner_left_p">
          Your performance exceed 65% <br className="br_desktop" /> of <br className="br_mobile" /> the
          people conducting the <br className="br_desktop" />
          test here!
        </p>
      </div>
    </>
  );
}

export default Conteiner_left;
