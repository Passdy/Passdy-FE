import React from "react";

const LayoutWrapper: React.FC = ({ children }) => (
  <div
    data-aos="fade-in"
    data-aos-easing="linear"
    data-aos-duration="600"
    data-aos-delay="500"
    data-aos-once="true"
  >
    {children}
  </div>
);

export default LayoutWrapper;
