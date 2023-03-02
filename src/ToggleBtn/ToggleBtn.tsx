import React from "react";
import "../_dist/ToggleBtn.css";
type Props = {
  isOn: boolean;
  onChange: () => void;
};

const ToggleBtn = ({ isOn, onChange }: Props) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={onChange}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default ToggleBtn;
