import React, { useEffect, useState } from "react";
import "../_dist/SelectGm.css";

export type Option = {
  value: string;
  label: string;
};
type MultipleSelectProps = {
  multiple: true;
  value: Option[];
  onChange: (value: Option[]) => void;
};

type SingleSelectProps = {
  multiple: false;
  value: Option;
  onChange: (value: Option | undefined) => void;
};
type Props = {
  options: Option[];
} & (SingleSelectProps | MultipleSelectProps);
const SelectGm = ({ multiple, value, onChange, options }: Props) => {
  const [show, setShow] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: Option) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: Option) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (show) setHighlightedIndex(0);
  }, [show]);
  return (
    <div
      className="sl-container"
      onBlur={() => setShow(false)}
      onClick={() => setShow((prev) => !prev)}
    >
      <span className="sl-value">
        {multiple
          ? value.map((v, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className="option-badge"
              >
                {v.label}
                <span className="remove-btn">&times;</span>
              </button>
            ))
          : value.label}
      </span>
      <button
        className="clear-btn"
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </button>
      <div className="sl-divider"></div>
      <div className="sl-caret"></div>
      <ul className={`sl-options ${show ? "show" : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setShow(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={index}
            className={`option ${isOptionSelected(option) ? "selected" : ""} ${
              index === highlightedIndex ? "highlighted" : ""
            }`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectGm;
