import React, { ReactNode } from "react";
import "../_dist/DropDownItems.css";
type Props = {
  children?: JSX.Element | ReactNode;
  onClick?: () => void;
};

const DropDownItems: React.FC<Props> = ({ children, onClick }) => {
  return (
    <li className="dd-item" onClick={onClick}>
      {children}
    </li>
  );
};

export default DropDownItems;
