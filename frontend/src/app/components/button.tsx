import * as React from "react";
import { cn } from "@/lib/utils";

// use type instead of interface
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-2xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
