import React, { ReactNode, useState } from "react";
import "../_dist/DropDownBtn.css";

type Props = {
  children?: JSX.Element | ReactNode;
};

const DropDownBtn: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleEnter = () => {
    setOpen(!open);
  };

  const toggleLeave = () => {
    setOpen(false);
  };
  return (
    <div className="dd-container">
      <div className="actionBtn-dd">
        <div className="dd-content">
          <button
            className="primary"
            onClick={toggleEnter}
            onBlur={toggleLeave}
          >
            Select item
          </button>
          {open && <ul className="list-items">{children}</ul>}
        </div>
      </div>
    </div>
  );
};

export default DropDownBtn;
