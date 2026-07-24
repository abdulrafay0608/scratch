"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { NAVIGATION } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  activeSection?: string;
}

export function MobileNav({ activeSection = "home" }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        aria-label="Toggle Navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-screen w-[320px]",
          "border-l border-border bg-background/95 backdrop-blur-xl",
          "transition-transform duration-500 ease-in-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-6">
          <h3 className="text-lg font-semibold">Navigation</h3>

          <Button variant="ghost" size="icon" onClick={closeMenu}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 p-6">
          {NAVIGATION.map((item) => {
            const active = activeSection === item.href.replace("#", "");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "rounded-xl px-4 py-3 transition-all duration-300",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted",
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="mt-auto border-t border-border p-6 space-y-4">
          <Button className="w-full">Download Resume</Button>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Theme</span>

            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
