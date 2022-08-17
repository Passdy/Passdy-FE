/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
import styled from "@emotion/styled";
import React, { CSSProperties } from "react";

const StyledButtonNextArrow = styled("div")`
  width: 32px !important;
  height: 32px !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  transform: matrix(1, 0, 0, 1, 0, 0);
  right: 6.1% !important;
  z-index:1;
  &:hover {
    background: black;
  }
  ::before {
    content: url(/icons/product/next-icon.svg) !important;
  }
`;

const StyledButtonPreviousArrow = styled("div")`
  width: 32px;
  height: 32px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  left: 1.8% !important;
  z-index:1;
  &:hover {
    background: blue;
  }
  ::before {
    content: url(/icons/product/back-icon.svg) !important;
  }
`;

const ReactSlickNextArrow = (props: {
  className?: string;
  style?: CSSProperties | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  const { className, style, onClick } = props;
  return <StyledButtonNextArrow className={className} style={style} onClick={onClick} />;
};

const ReactSlickPrevArrow = (props: {
  className?: string;
  style?: CSSProperties | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  const { className, style, onClick } = props;
  return <StyledButtonPreviousArrow className={className} style={style} onClick={onClick} />;
};

export const SETTINGS_BANNER = {
  autoplay: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <ReactSlickNextArrow />,
  prevArrow: <ReactSlickPrevArrow />,
};
