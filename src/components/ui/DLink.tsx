import Link from "next/link";
import React from "react";

interface DlinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  target?: string;
  style?: React.CSSProperties;
  rel?: string;
  underlined?: boolean;
}

const DLink: React.FC<DlinkProps> = ({
  children,
  style,
  href,
  className,
  rel,
  target,
  underlined,
  ...props
}) => {
  return (
    <Link
      rel={rel}
      style={style}
      className={`block ${
        underlined ? "underline " : "hover:underline"
      } hover:text-hover-blue inline transition-colors mb-2 text-link ${
        className && className
      }`}
      href={href ? href : "#"}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

export default DLink;
