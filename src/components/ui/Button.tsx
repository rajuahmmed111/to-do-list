import React from "react";
import clsx from "clsx"; // Optional, for easier conditional class merging

// Define the types for the props
type ButtonVariant = "primary" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

// Button component
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  // Define variant-specific styles
  const baseStyles =
    "flex items-center gap-2 px-3 py-2 rounded-md font-bold transition-colors";
  const variants = {
    primary: "bg-[#8B9B3E] text-white hover:bg-[#7A8936]",
    outline:
      "border border-[#8B9B3E] text-primary-green hover:bg-accent hover:text-white",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
