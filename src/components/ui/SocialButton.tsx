"use client";

import Link from "next/link";
import * as React from "react";
import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;

  className?: string;

  variant?: "default" | "glass";

  size?: "sm" | "md" | "lg";

  external?: boolean;

  showLabel?: boolean;
}

const sizeClasses = {
  sm: {
    button: "h-10 w-10",
    icon: "h-4 w-4",
  },

  md: {
    button: "h-12 w-12",
    icon: "h-5 w-5",
  },

  lg: {
    button: "h-14 w-14",
    icon: "h-6 w-6",
  },
};

export function SocialButton({
  href,
  icon,
  label,
  className,
  variant = "glass",
  size = "md",
  external = true,
  showLabel = false,
}: SocialButtonProps) {
  const currentSize = sizeClasses[size];

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={cn(
        "group inline-flex items-center gap-3 transition-all duration-300",

        showLabel && "rounded-full px-5 py-3",

        !showLabel && cn(currentSize.button, "justify-center rounded-full"),

        variant === "glass"
          ? "border border-white/10 bg-white/5 backdrop-blur-xl hover:border-indigo-500/40 hover:bg-indigo-500/10"
          : "border border-border bg-background hover:bg-muted",

        className,
      )}
    >
      <span
        className={cn(
          currentSize.icon,
          "flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5",
        )}
      >
        {icon}
      </span>

      {showLabel && (
        <>
          <span className="text-sm font-medium">{label}</span>

          {external && (
            <ExternalLink className="h-4 w-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </>
      )}
    </Link>
  );
}
