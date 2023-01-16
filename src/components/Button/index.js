import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder25: "rounded-radius25" };
const variants = {
  OutlineTeal800: "border-bw3 border-solid border-teal_800 text-teal_800",
};
const sizes = { sm: "sm:p-[15px] md:p-[19px] p-[29px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder25"]),
  variant: PropTypes.oneOf(["OutlineTeal800"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder25",
  variant: "OutlineTeal800",
  size: "sm",
};

export { Button };
