"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function NavItem({
  href,
  label,
  active = false,
  onClick,
}: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative inline-flex items-center",
        "px-2 py-2",
        "text-sm font-medium",
        "transition-colors duration-300",
        active ? "text-primary" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}

      <span
        className={cn(
          "absolute",
          "bottom-0 left-0",
          "h-0.5",
          "rounded-full",
          "bg-primary",
          "transition-all duration-300",

          active ? "w-full" : "w-0 group-hover:w-full",
        )}
      />
    </Link>
  );
}
