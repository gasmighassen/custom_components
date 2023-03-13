import React, { ReactNode, useEffect, useState } from "react";
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
  const [targetKeys, setTargetKeys] = useState<ArrayProp<any>[]>([]);
  const [selectedItems, setSelectedItems] = useState<ArrayProp<any>[]>([]);
  const [check, setCheck] = useState<boolean>();
  useEffect(() => {
    setCheck(selectedItems.length ? true : false);
  }, [selectedItems]);

  const [filter, setFilter] = useState("");
  const filtredData = data
    .filter((f) => f.title.toLowerCase().includes(filter.toLocaleLowerCase()))
    .filter((el) => !targetKeys.includes(el));

  const handleSelect = (value: ArrayProp<any>) => {
    selectedItems.filter((item: any) => item === value).length
      ? setSelectedItems(selectedItems.filter((item: any) => item !== value))
      : setSelectedItems([...selectedItems, value]);
  };
  const addTargetKey = () => {
    setTargetKeys(selectedItems);
  };
  const removeTargetKey = (value: ArrayProp<any>) => {
    setTargetKeys(targetKeys.filter((item: any) => item !== value));
    setSelectedItems(selectedItems.filter((item: any) => item !== value));
  };
  const handleResetAnimation = () => {
    setResetClicked("reseting");
    setFilter("");
    setTimeout(() => {
      setResetClicked("");
    }, 1000);
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
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <SearchOutlined />
        </div>
        <div className="tsf-item-list">
          {filtredData.map((el) => (
            <div onClick={() => handleSelect(el)}>
              <input
                type="checkbox"
                name=""
                checked={selectedItems.includes(el)}
              />
              <label htmlFor="">{el.title}</label>
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
        className={check ? "tsf-btn" : "tsf-btn disabled"}
        onClick={() => {
          addTargetKey();
          setCheck(false);
        }}
      >
        <img src="../../images/right_arrow.svg" alt="" />
      </button>
      <div className="tsf-list">
        <div className="tsf-head">
          <p>{targetKeys.length} Selected items</p>
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
          {targetKeys.map((el, i) => (
            <div key={i} className="tsf-target">
              <span>{el.title}</span>
              <span onClick={() => removeTargetKey(el)} className="tsf-delete">
                <img src="../../images/delete.svg" alt="" />
              </span>
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
