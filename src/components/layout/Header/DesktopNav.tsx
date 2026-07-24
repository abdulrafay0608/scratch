"use client";

import { NAVIGATION } from "@/data/navigation";
import { NavItem } from "./NavItem";

interface DesktopNavProps {
  activeSection?: string;
}

export function DesktopNav({ activeSection = "home" }: DesktopNavProps) {
  return (
    <nav
      className="hidden items-center gap-8 lg:flex"
      aria-label="Primary Navigation"
    >
      {NAVIGATION.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          label={item.title}
          active={activeSection === item.href.replace("#", "")}
        />
      ))}
    </nav>
  );
}
