"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  title: string;
  highlight?: string;

  as?: React.ElementType;

  align?: "left" | "center";

  size?: "sm" | "md" | "lg" | "xl";

  className?: string;
};

const sizeClasses = {
  sm: "text-3xl md:text-4xl",

  md: "text-4xl md:text-5xl",

  lg: "text-5xl md:text-6xl lg:text-7xl",

  xl: "text-6xl md:text-7xl lg:text-8xl",
};

export function AnimatedText({
  title,
  highlight,
  as: Component = "h1",
  align = "left",
  size = "lg",
  className,
}: AnimatedTextProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <Component
      className={cn(
        "font-heading font-bold tracking-tight leading-[1.05]",

        sizeClasses[size],

        align === "center" ? "text-center" : "text-left",

        className,
      )}
    >
      {parts[0]}

      {highlight && <span className="gradient-text">{highlight}</span>}

      {parts[1]}
    </Component>
  );
}
