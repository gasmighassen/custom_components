import React from "react";
import ButtonGm from "./buttons/ButtonGm";
import { RightOutlined } from "@ant-design/icons";
import "./_dist/App.css";

import { data } from "./data/data";
import DropDownBtn from "./dropDown/DropDownBtn";
import DropDownItems from "./dropDown/DropDownItems";
function App() {
  const test = () => {
    console.log("tested");
  };
  return (
    <div className="App">
      <div className="buttons-container">
        <h1>Link button</h1>
        <ButtonGm type="linkBtn" onClick={() => console.log("test")}>
          Link Button
        </ButtonGm>
        <h1>Primary Ghosted button</h1>
        <ButtonGm
          type="primary"
          size="md"
          ghost={true}
          onClick={() => console.log("test")}
        >
          Ghost button
        </ButtonGm>
        <h1>Link button</h1>
        <ButtonGm
          type="primary"
          size="md"
          onClick={() => console.log("test")}
        ></ButtonGm>
      </div>

      <DropDownBtn>
        <DropDownItems onClick={test}>Lorem ipsum dolor sit.</DropDownItems>
        <DropDownItems>Lorem ipsum dolor sit amet.</DropDownItems>
        <DropDownItems>Lorem, ipsum dolor.</DropDownItems>
        <DropDownItems>Lorem ipsum dolor sit amet consectetur.</DropDownItems>
      </DropDownBtn>
    </div>
  );
}

export default App;
