"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];

      let current = "home";

      for (const id of sections) {
        const section = document.getElementById(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-500",

        scrolled
          ? "border-b border-white/10 bg-background/80 shadow-lg backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}

        <Logo />

        {/* Desktop Navigation */}

        <DesktopNav activeSection={activeSection} />

        {/* Right Side */}

        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="outline">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>

          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}

        <MobileNav activeSection={activeSection} />
      </div>
    </header>
  );
}
