import React, { useState } from "react";
import ButtonGm from "./buttons/ButtonGm";
import "./_dist/App.css";
import DropDownBtn from "./dropDown/DropDownBtn";
import DropDownItems from "./dropDown/DropDownItems";

import { data, data2 } from "./data/data";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import Carousel from "./Carousel/Carousel";
import CarouselItem from "./Carousel/CarouselItem";
import SelectGeneric from "./Select/SelectGeneric";
import MultiDrop from "./MultilevelDrop/MultiDrop";

function App() {
  const test = () => {
    console.log("tested");
  };
  const [value, setValue] = useState([]);
  const [value2, setValue2] = useState<any>([]);
  const [value3, setValue3] = useState(false);
  const [first, setfirst] = useState<string | undefined | number>("");
  const label = "Name";
  const [selected, setSelected] = useState<any>([]);
  console.log(value);
  return (
    <div className="App">
      <div className="buttons-container">
        <h1>Link button</h1>
        <ButtonGm
          type="linkBtn"
          onClick={() => {
            test;
          }}
        >
          Disabled
        </ButtonGm>
        <h1>disabled button</h1>
        <ButtonGm type="default" disabled>
          isabled
        </ButtonGm>
        <h1>Primary Ghosted button</h1>
        <ButtonGm
          type="primary"
          size="md"
          ghost={true}
          onClick={() => {
            test;
          }}
        >
          Ghost button
        </ButtonGm>
        <h1>Link button</h1>
        <ButtonGm
          type="primary"
          size="md"
          onClick={() => {
            test;
          }}
        ></ButtonGm>
      </div>
      <div>
        <h1>Dropdown</h1>
        <div className="drop">
          <DropDownBtn>
            <DropDownItems onClick={test}>Lorem ipsum dolor sit.</DropDownItems>
            <DropDownItems>Lorem ipsum dolor sit amet.</DropDownItems>
            <DropDownItems>Lorem, ipsum dolor.</DropDownItems>
            <DropDownItems>
              Lorem ipsum dolor sit amet consectetur.
            </DropDownItems>
          </DropDownBtn>
          <DropDownBtn>
            <DropDownItems onClick={test}>Lorem ipsum dolor sit.</DropDownItems>
            <DropDownItems>Lorem ipsum dolor sit amet.</DropDownItems>
            <DropDownItems>Lorem, ipsum dolor.</DropDownItems>
            <DropDownItems>
              Lorem ipsum dolor sit amet consectetur.
            </DropDownItems>
          </DropDownBtn>
        </div>
      </div>

      <div className="select">
        <h1>single select</h1>
        {/*  <SelectGm
          options={data}
          multiple={false}
          value={value}
          icon="chain"
          onChange={(option) => setValue(option)}
        />
        <h1>Multi select</h1>
        <SelectGm
          options={data}
          multiple
          value={value2}
          onChange={(option) => setValue2(option)}
        /> */}

        {/*    <SelectGeneric
          items={data}
          multiple
          label="Name"
          value={value}
          onChange={() => setValue}
          render={(option) => <li>{option.Name}</li>}
        />
 */}
        <h1>job titles</h1>
        <SelectGeneric
          items={data}
          multiple
          value={setValue}
          label="Name"
          icon="chain"
          render={(option) => <li>{option.Name}</li>}
        />
      </div>
      <div className="checkbtn">
        <h1>On/Off</h1>
        <ToggleBtn isOn={value3} onChange={() => setValue3(!value3)} />
      </div>
      <Carousel slidNb={2}>
        {data2.map((el) => (
          <CarouselItem>{el.jobTitle}</CarouselItem>
        ))}
      </Carousel>
      <div className="multidrop">
        <MultiDrop />
      </div>
    </div>
  );
}

export default App;
