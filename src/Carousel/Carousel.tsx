import React, { ReactNode, useState } from "react";
import "../_dist/Carousel.css";

type Props = {
  children?: JSX.Element | ReactNode;
};

const Carousel = ({ children }: Props) => {
  const [step, setStep] = useState(0);

  function updateStep(newStep: number) {
    if (newStep < 0) {
      newStep = 0;
    } else if (newStep >= React.Children.count(children)) {
      newStep = React.Children.count(children) - 1;
    }
    setStep(newStep);
  }

  return (
    <div className="carousel">
      <div className="action-carousel">
        <span className="arrow" onClick={() => updateStep(step - 1)}>
          <img src="../../images/left_arrow.svg" alt="" />
        </span>
        <span className="arrow" onClick={() => updateStep(step + 1)}>
          <img src="../../images/right_arrow.svg" alt="" />
        </span>
      </div>
      <div
        className="inner-carousel"
        style={{ transform: `translateX(-${step * 300}%)` }}
      >
        {React.Children.map(children, (child: any, index) => {
          return React.cloneElement(child);
        })}
      </div>
    </div>
  );
};
export default Carousel;
