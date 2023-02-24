import React, { ReactNode, useState } from "react";
import "../_dist/SelectGm.css";
type Props = {
  children?: JSX.Element | ReactNode;
};

export default function Select({ children }: Props) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="sl-container"
      onBlur={() => setShow(false)}
      onClick={() => setShow((prev) => !prev)}
    >
      <span className="sl-value"></span>
      <button className="clear-btn">&times;</button>
      <div className="sl-divider"></div>
      <div className="sl-caret"></div>
      <ul className={`sl-options ${show ? "show" : ""}`}>{children}</ul>
    </div>
  );
}
