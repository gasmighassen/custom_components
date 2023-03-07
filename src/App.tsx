import React, { useState } from "react";
import ButtonGm from "./buttons/ButtonGm";
import "./_dist/App.css";
import DropDownBtn from "./dropDown/DropDownBtn";
import DropDownItems from "./dropDown/DropDownItems";

import { data, data2, data3 } from "./data/data";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import Carousel from "./Carousel/Carousel";
import CarouselItem from "./Carousel/CarouselItem";
import SelectGeneric from "./Select/SelectGeneric";

import Cascader from "./Cascader/Cascader";
import DatePicker from "./DatePicker/DatePicker";

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
  const [filter, setFilter] = useState<any>();
  console.log(filter);
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
          Disabled
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
        <h1>job titles</h1>
        <SelectGeneric
          items={data}
          multiple
          value={setValue}
          icon="chain"
          render={(option) => <li>{option.Name}</li>}
        />
      </div>
      <div className="checkbtn">
        <h1>On/Off</h1>
        <ToggleBtn isOn={value3} onChange={() => setValue3(!value3)} />
      </div>
      <div className="multidrop">
        <Cascader
          value={setFilter}
          keys={[
            "jobTitle",
            "industry",
            "field",
            "LevelofExpertise",
            "Speciality",
          ]}
          data={data3}
        />
      </div>

      <div className="carou">
        <Carousel slidNb={3}>
          <CarouselItem>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1677396390519-c56094fc16b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1677350839343-6d94f3f88f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1677443413010-2982f93f5cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1677396390519-c56094fc16b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1677350839343-6d94f3f88f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1677443413010-2982f93f5cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </CarouselItem>
        </Carousel>
      </div>
      <div className="datePicker">
        <DatePicker />
      </div>
    </div>
  );
}

export default App;
