import React, { ReactElement, ReactNode } from "react";
import Slider, { Settings } from "react-slick";

interface Props {
  children: ReactNode;
  settings: Settings;
}

function SlickSlider({ children, settings }: Props): ReactElement {
  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
}
export default SlickSlider;
