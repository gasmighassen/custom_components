import React, { ReactNode, useState } from "react";
import { JsxElement } from "typescript";
import "../_dist/ButtonGm.css";

export type IButtonGm = {
  type?: "primary" | "default" | "dashed" | "textBtn" | "linkBtn" | "ghost";
  onClick?: () => void;
  block?: boolean;
  disabled?: boolean | undefined;
  ghost?: boolean;
  href?: string;
  icon?: JsxElement | ReactNode;
  shape?: "default" | "circle" | "round";
  size?: "lg" | "md" | "sm";
  target?: string;
 
  children?: string | JsxElement | ReactNode;
};

const ButtonGm: React.FC<IButtonGm> = ({
  type = "primary",
  block,

  disabled,
  ghost,
  href = "",
  icon,
  shape = "default",
  size = "md",
  target = "",
  children = type,

  onClick,
}) => {
  let ghostValue: string;
  if (ghost) {
    ghostValue = "ghost";
  } else ghostValue = "";

  return (
    <>
      {type === "linkBtn" ? (
        <a
          href={href}
          className={`${type} ${size} ${ghostValue}`}
          target={target}
          onClick={onClick}
        >
          <>{children}</>
        </a>
      ) : (
        <button
          className={`${type} ${size} ${ghostValue}`}
          disabled={disabled}
          onClick={onClick}
        >
          <>
            {children}
            {icon}
          </>
        </button>
      )}
    </>
  );
};
export default ButtonGm;
