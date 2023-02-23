import React, { useState } from "react";
import ButtonGm from "./buttons/ButtonGm";
import "./_dist/App.css";
import DropDownBtn from "./dropDown/DropDownBtn";
import DropDownItems from "./dropDown/DropDownItems";
import SelectGm, { Option } from "./Select/SelectGm";




function App() {
  const targets = [
    { value: "dqsd", label: "dqsdqsd" },
    { value: "dqsdqs", label: "qsdqsdqsd" },
    { value: "dqsdqsd", label: "sqdqsdq" },
    { value: "qsdqsd", label: "qsdqsd" },
    { value: "dqsdq", label: "dqsdqsd" },
    { value: "qsdqsd", label: "dqsdqsd" },
    { value: "es2dqsdqs", label: "dqsdqsd" },
  ];
  const test = () => {
    console.log("tested");
  };
  const [value, setValue] = useState<Option[]>([targets[0]]);

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

      <SelectGm
        options={targets}
        multiple
        value={value}
        onChange={(option) => setValue(option)}
      />
    </div>
  );
}

export default App;
