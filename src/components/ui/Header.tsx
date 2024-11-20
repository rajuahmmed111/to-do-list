import React from "react";

const Header = ({
  children,
  className,
  Icon,
  iconClass,
  id,
}: {
  children: React.ReactNode;
  Icon?: React.ElementType;
  className?: string;
  iconClass?: string;
  id?: string;
}) => {
  return (
    <h1
      id={id}
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
