import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  [
    "relative",
    "overflow-hidden",
    "rounded-3xl",
    "transition-all",
    "duration-500",
    "border",
  ],
  {
    variants: {
      variant: {
        default:
          "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900",

        glass: "border-white/10 bg-white/5 backdrop-blur-xl",

        outline: "border-slate-300 bg-transparent dark:border-slate-700",

        gradient:
          "border-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white",

        spotlight: "border-slate-800 bg-slate-950",
      },

      hover: {
        true: "hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-500/40",

        false: "",
      },

      padding: {
        none: "p-0",

        sm: "p-4",

        md: "p-6",

        lg: "p-8",
      },
    },

    defaultVariants: {
      variant: "default",
      hover: true,
      padding: "md",
    },
  },
);

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({
  className,
  variant,
  hover,
  padding,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          hover,
          padding,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
