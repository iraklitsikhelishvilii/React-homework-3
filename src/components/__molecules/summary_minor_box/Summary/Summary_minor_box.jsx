import React from "react";
import "../Summary/Summary_minor_box.css";
import Reation from "../../../__atoms/Reaction/Reaction";
import Memory from "../../../__atoms/Memory/Memory";
import Verbal from "../../../__atoms/Verbal/Verbal";
import Visual from "../../../__atoms/Visual/Visual";

function Summary_minor_box() {
  return (
    <>
      <div className="Summary_minor_box">
        <Reation />
        <Memory />
        <Verbal />
        <Visual />
      </div>
    </>
  );
}

export default Summary_minor_box;
