import React, { useState } from "react";
import "../_dist/SelectGm.css";

interface SelectProps<SItem> {
  items: SItem[];
  render: (item: SItem) => React.ReactNode;
  multiple?: true;
  value: SItem[];
  onChange?: (value: SItem[]) => void;
}

export default function SelectGeneric<SItem>(props: SelectProps<SItem>) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="sl-container"
      onBlur={() => setShow(false)}
      onClick={() => setShow((prev) => !prev)}
    >
      <span className="sl-value">
        {props.value.map((el: any, i) => (
          <button key={i} className="option-badge">
            {el}
            <span className="remove-btn">&times;</span>
          </button>
        ))}
      </span>
      <button className="clear-btn">&times;</button>
      <div className="sl-divider"></div>
      <div className="sl-caret"></div>
      <ul className={`sl-options ${show ? "show" : ""}`}>
        {props.items.map((item) => props.render(item))}
      </ul>
    </div>
  );
}
