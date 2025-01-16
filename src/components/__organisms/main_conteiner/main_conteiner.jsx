import React from "react";
import "../main_conteiner/main_conteiner.css";
import Conteiner_left from "../../__molecules/conteiner_left/conteiner_left";
import Conteiner_right from "../../__molecules/conteiner_right/Conteiner_right";

function Main_conteiner() {
  return (
    <>
      <div className="main_conteiner">
        <Conteiner_left />
        <Conteiner_right />
      </div>
    </>
  );
}

export default Main_conteiner;
