import React from "react";

const Header = ({
  children,
  className,
  Icon,
  iconClass,
}: {
  children: React.ReactNode;
  Icon?: React.ElementType;
  className?: string;
  iconClass?: string;
}) => {
  return (
    <h1
      className={`text-text-green ${
        Icon ? "flex gap-3 items-center flex-wrap" : ""
      } font-ubuntu font-semibold  ${className ? className : "text-2xl"}`}
    >
      {Icon && <Icon className={`${iconClass ? iconClass : "text-3xl"} `} />}{" "}
      {children}
    </h1>
  );
};

export default Header;
