import * as React from "react";

import { cn } from "@/lib/utils";

type SectionBackground = "transparent" | "default" | "muted" | "gradient";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;

  children: React.ReactNode;

  background?: SectionBackground;

  as?: React.ElementType;
}

const backgroundVariants = {
  transparent: "",

  default: "bg-background",

  muted: "bg-muted/30",

  gradient:
    "bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]",
};

export function Section({
  id,
  children,
  className,
  background = "transparent",
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        "relative",
        "scroll-mt-24",
        "py-20",
        "sm:py-24",
        "lg:py-32",
        backgroundVariants[background],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
