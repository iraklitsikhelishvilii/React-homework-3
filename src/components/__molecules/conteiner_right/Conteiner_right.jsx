import React from "react";
import "../conteiner_right/conteiner_right.css";
import Summary_minor_box from "../summary_minor_box/Summary/Summary_minor_box";
import Button from "../../__atoms/Button/Button";

function Conteiner_right() {
  return (
    <>
      <div className="conteiner_right">
        <h1 className="conteiner_right_h">Summary</h1>
        <Summary_minor_box />
        <Button />
      </div>
    </>
  );
}
export default Conteiner_right;
