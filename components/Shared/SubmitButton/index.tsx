import React from "react";
import cls from "classnames";
import ClipLoader from "react-spinners/ClipLoader";
import commonStyles from "../../../styles/common.module.scss";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  typeButton?: "submit" | "button";
};

const SubmitButton = ({ children, className, loading, typeButton }: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button type={typeButton} disabled={loading} className={cls(commonStyles.button, className)}>
    {children}
    <div className={commonStyles.loadingWrapper}>
      <ClipLoader color="#ffffff" loading={loading} size={20} />
    </div>
  </button>
);
SubmitButton.defaultProps = {
  className: "",
  loading: false,
  typeButton: "submit",
};

export default SubmitButton;
