import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-full",
    "border",
    "font-medium",
    "transition-all",
    "duration-300",
    "select-none",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        default:
          "border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200",

        primary: "border-indigo-500/20 bg-indigo-500/10 text-indigo-500",

        secondary: "border-cyan-500/20 bg-cyan-500/10 text-cyan-500",

        success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",

        warning: "border-amber-500/20 bg-amber-500/10 text-amber-500",

        danger: "border-red-500/20 bg-red-500/10 text-red-500",

        outline: "border-border bg-transparent text-foreground",
      },

      size: {
        sm: "px-3 py-1 text-xs",

        md: "px-4 py-1.5 text-sm",

        lg: "px-5 py-2 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

export function Badge({
  className,
  variant,
  size,
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    >
      {icon}

      {children}
    </div>
  );
}
