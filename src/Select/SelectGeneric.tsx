import React, { useEffect, useState } from "react";
import "../_dist/SelectGm.css";

interface SelectProps<SItem> {
  items: SItem[];
  render: (item: SItem) => React.ReactNode;
  multiple?: boolean;
  value: React.Dispatch<React.SetStateAction<never[]>>;
  icon?: "arrow" | "chain" | "courant";
}

export default function SelectGeneric<SItem>({
  items,
  render,
  value,
  icon = "arrow",
}: SelectProps<SItem>) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const [toSHow, setToSHow] = useState("");

  const addSelected = (item: any) => {
    setSelected({ ...item, Name: item.Name });
    setToSHow(item.Name);
  };

  useEffect(() => {
    value(selected);
  }, [selected]);

  const selectIcon = (icon: string) => {
    switch (icon) {
      case (icon = "arrow"):
        return <img src="../../images/arrow_down.svg" alt="" />;
      case (icon = "chain"):
        return <img src="../../images/chain.svg" alt="" />;
      case (icon = "courant"):
        return <img src="../../images/courant.svg" alt="" />;

      default:
        break;
    }
  };

  return (
    <div
      className="sl-container"
      onBlur={() => setShow(false)}
      onClick={() => setShow((prev) => !prev)}
    >
      <span className="sl-value">
        <span> {toSHow}</span>
      </span>

      <span>{selectIcon(icon)}</span>
      <ul className={`sl-options ${show ? "show" : ""}`}>
        {items.map((item: any, i) => (
          <li key={i} onClick={() => addSelected(item)}>
            {render(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
