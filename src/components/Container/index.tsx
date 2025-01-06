import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={twMerge(
        "max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full",
        className
      )}
    >
      {children}
    </div>
  );
};
