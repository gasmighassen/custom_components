import React, { useState } from "react";
import ButtonGm from "./buttons/ButtonGm";
import "./_dist/App.css";
import DropDownBtn from "./dropDown/DropDownBtn";
import DropDownItems from "./dropDown/DropDownItems";
import SelectGm from "./Select/SelectGm";
import SelectGeneric from "./Select/SelectGeneric";
import { data } from "./data/data";
import Select from "./Select/Select";
import SelectItem from "./Select/SelectItem";
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
  const [value, setValue] = useState<any>([]);
  const [first, setfirst] = useState<string | undefined | number>("");

  const [selected, setSelected] = useState<any>([]);
  console.log(value);
  console.log(first);
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
      <div className="select">
        <SelectGm
          options={data}
          multiple
          value={value}
          onChange={(option) => setValue(option)}
        />

        {/* <SelectGeneric
          items={data}
          value={selected}
          render={(data) => (
            <li onClick={(e) => setSelected([...selected, data.last_name])}>
              {data.last_name}
            </li>
          )}
        /> */}
      </div>
    </div>
  );
}

export default App;
