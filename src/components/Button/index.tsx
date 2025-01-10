import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  className?: string;
}

const sizes = {
  md: "px-4 py-2 text-base font-medium",
  lg: "px-6 py-3 text-lg font-semibold",
  xl: "px-10 py-4 text-xl font-bold",
};

const colors = {
  accent: "bg-accent hover:bg-accent/80 text-neutral-50",
  black: "bg-black hover:bg-accent text-neutral-50",
  outlineNo: "text-accent hover:text-accent/80",
  outlineDark:
    "text-black hover:text-accent border border-black hover:border-accent",
  outlineLight:
    "text-neutral-50 hover:text-accent border border-text-neutral-50 hover:border-accent",
  outlineAccent:
    "text-accent hover:bg-accent border border-accent hover:text-neutral-50",
  primary: "bg-primary hover:bg-primary/80 text-neutral-50",
};

const Button = ({
  color = "black",
  size = "md",
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) => {
  const colorClasses = colors[color];
  const sizeClasses = sizes[size];

  return (
    <button
      rel="noopener noreferrer"
      type={type}
      className={twMerge(
        `rounded transition-colors ${sizeClasses} ${colorClasses}`,
        "disabled:bg-neutral-300 disabled:text-neutral-600 disabled:hover:text-neutral-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
