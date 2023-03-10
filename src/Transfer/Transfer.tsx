import React, { ReactNode, useState } from "react";
import "../_dist/Transfer.css";
import { SearchOutlined } from "@ant-design/icons";

interface ArrayProp<T> {
  [key: string]: T;
}
type transferProps = {
  data: ArrayProp<any>[];
};

const Transfer: React.FC<transferProps> = ({ data }) => {
  const [resetClicked, setResetClicked] = useState("");
  const [fromData, setFromData] = useState(data);
  const [toData, setToData] = useState<ArrayProp<any>[]>([]);
  const [finalSelection, setFinalSelection] = useState<ArrayProp<any>[]>([]);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    let selected = toData;
    if (e.target.checked) {
      selected.push(JSON.parse(e.target.value));
    } else {
      selected.splice(selected.indexOf(JSON.parse(e.target.value)), 1);
    }
    setToData(selected);
  };
  const handleRemove = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log(e.currentTarget.getAttribute("data-data"));
    let toRemove = [...toData];
    let removed = toRemove.filter(
      (el) => el.key !== e.currentTarget.getAttribute("data-data")
    );
    setToData(removed);
  };

  const handleResetAnimation = () => {
    setResetClicked("reseting");
    setTimeout(() => {
      setResetClicked("");
    }, 1000);
  };
  const handleSelection = () => {
    const newData = fromData.filter(
      (fd) => !toData.some((td) => td.key === fd.key)
    );
    setFromData(newData);
    setFinalSelection(toData);
  };

  return (
    <div className="transfer-container">
      <div className="tsf-list">
        <div className="tsf-head">
          <p>view marked</p>
        </div>
        <div className="tsf-search">
          <input
            type="search"
            placeholder="Search"
            className="tsf-search-input"
          />
          <SearchOutlined />
        </div>
        <div className="tsf-item-list">
          {fromData.map((el: any, i) => (
            <div key={i}>
              <input
                type="checkbox"
                name={el.key}
                id={el.title}
                value={JSON.stringify(el)}
                onChange={(e) => {
                  handleCheck(e);
                }}
              />
              <label htmlFor={el.title}>{el.title}</label>
            </div>
          ))}
        </div>
        <div className="tsf-footer">
          <div className="tsf-icon-footer">
            <img
              src="../../images/reset.svg"
              alt=""
              className={resetClicked}
              onClick={() => {
                handleResetAnimation();
              }}
            />
          </div>
        </div>
      </div>
      <button
        className="tsf-btn"
        onClick={() => {
          handleSelection();
        }}
      >
        <img src="../../images/right_arrow.svg" alt="" />
      </button>
      <div className="tsf-list">
        <div className="tsf-head">
          <p>Selected items</p>
        </div>
        <div className="tsf-search">
          <input
            type="search"
            placeholder="Search"
            className="tsf-search-input"
          />
          <SearchOutlined />
        </div>
        <div className="tsf-item-list">
          {finalSelection.map((data, i) => (
            <div key={i}>
              <input
                type="checkbox"
                name={data.key}
                id={data.title}
                value={data[i]}
              />
              <label htmlFor={data.title}>{data.title}</label>
              <input
                type="button"
                value="delete"
                data-data={data.key}
                onClick={(e) => handleRemove(e)}
              />
            </div>
          ))}
        </div>
        <div className="tsf-footer">
          <div className="tsf-icon-footer">
            <img src="../../images/save.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
