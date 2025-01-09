import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SnackbarProps {
  title: string;
  text?: string;
  children?: ReactNode;
  isError?: boolean;
}

export const Snackbar = ({
  children,
  title,
  text,
  isError = false,
}: SnackbarProps) => {
  return (
    <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-gray-50 text-gray-600 divide-gray-300">
      <div
        className={twMerge(
          "flex flex-1 flex-col p-4 border-l-8 border-accent-green",
          isError && "border-red-600"
        )}
      >
        <span
          className={twMerge(
            "text-2xl font-medium text-green-500",
            isError && "text-red-600"
          )}
        >
          {title}
        </span>
        <span className="text-xs text-gray-600">{text}</span>
        {children}
      </div>
    </div>
  );
};
