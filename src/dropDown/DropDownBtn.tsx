import React, { ReactNode, useState } from "react";
import "../_dist/DropDownBtn.css";

type Props = {
  children?: JSX.Element | ReactNode;
};

const DropDownBtn: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleEnter = () => {
    setOpen(true);
  };

  const toggleLeave = () => {
    setOpen(false);
  };
  return (
    <div className="dd-container">
      <div className="actionBtn-dd">
        <button className="primary" onMouseEnter={toggleEnter}>
          Select item
        </button>

        {open && (
          <ul className="list-items" onMouseLeave={toggleLeave}>
            {children}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDownBtn;
