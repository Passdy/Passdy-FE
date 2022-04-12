import React from "react";
import cls from "classnames";
import ClipLoader from "react-spinners/ClipLoader";
import commonStyles from "../../../styles/common.module.scss";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  typeButton?: "submit" | "button";
  fullWidthMobile?: boolean;
};

const SubmitButton = ({
  children,
  className,
  loading,
  typeButton,
  fullWidthMobile,
}: ButtonProps) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={typeButton}
    disabled={loading}
    className={cls(commonStyles.button, className, {
      [commonStyles.fullWidthButtonMobile]: fullWidthMobile,
    })}
  >
    {children}
    <div className={commonStyles.loadingWrapper}>
      <ClipLoader color="#ffffff" loading={loading} size={20} />
    </div>
  </button>
);
SubmitButton.defaultProps = {
  className: "",
  loading: false,
  fullWidthMobile: false,
  typeButton: "submit",
};

export default SubmitButton;
