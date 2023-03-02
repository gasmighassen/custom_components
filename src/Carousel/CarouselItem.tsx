import React, { ReactNode } from "react";
import "../_dist/Carousel.css";
type Props = {
  children: JSX.Element | ReactNode;
};

const CarouselItem = ({ children }: Props) => {
  return <div className="carousel-item">{children}</div>;
};
export default CarouselItem;
