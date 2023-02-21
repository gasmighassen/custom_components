import React from "react";
import ButtonGm from "./buttons/ButtonGm";
import { RightOutlined } from "@ant-design/icons";
import "./_dist/App.css";
import DropDown from "./dropDown/DropDown";
function App() {
  const items = [
    {
      id: 1,
      value: "Pulp Fiction",
    },
    {
      id: 2,
      value: "The Prestige",
    },
    {
      id: 3,
      value: "Blade Runner 2049",
    },
  ];
  return (
    <div className="App">
      <h1>Link button</h1>
      <ButtonGm type="linkBtn" onClick={() => console.log("test")}>
        {" "}
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
  );
}

export default App;
