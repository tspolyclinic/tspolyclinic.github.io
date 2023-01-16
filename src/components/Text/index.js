import React from "react";
const variantClasses = {
  h1: "md:text-[48px] sm:text-[48px] text-[70px]",
  h2: "sm:text-[40px] md:text-[46px] text-[50px]",
  h3: "font-semibold sm:text-[21px] md:text-[27px] text-[40px]",
  h4: "font-semibold sm:text-[26px] md:text-[28px] text-[30px]",
  h5: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
  h6: "font-normal text-[20px]",
  body1: "text-[18px]",
  body2: "font-bold text-[16px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
