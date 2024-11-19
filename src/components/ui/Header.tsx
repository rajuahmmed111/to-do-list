import React from "react";

const Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={`text-text-green font-ubuntu font-semibold text-2xl ${
        className ? className : ""
      }`}
    >
      {children}
    </h1>
  );
};

export default Header;
