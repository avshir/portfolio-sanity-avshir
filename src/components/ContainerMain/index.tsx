import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerMainProps {
  children: ReactNode;
  className?: string;
}

export const ContainerMain = ({ children, className }: ContainerMainProps) => {
  return (
    <main className={twMerge("flex-auto py-8 sm:py-12 lg:py-18", className)}>
      {children}
    </main>
  );
};
