"use client";

import { GitBranch, Send, Mail, ArrowUpRight, Download } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SocialButton } from "@/components/ui/SocialButton";
import { SOCIAL_LINKS } from "@/lib/constants";

// TS note: this "type" describes the exact shape of one stat.
// If you ever pass { label: "Projects" } without a "value", TypeScript
// will error at compile time instead of breaking silently in the browser.
type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { value: "3+", label: "Projects shipped" },
  { value: "1", label: "Internship completed" },
  { value: "MERN", label: "Core stack" },
];

export function Hero() {
  return (
    <Section
      id="home"
      background="gradient"
      className="flex min-h-[calc(100vh-5rem)] items-center justify-center py-24 sm:py-28 lg:min-h-[calc(100vh-6rem)] lg:py-32"
    >
      {/* Ambient glow orbs — purely decorative, sits behind content */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] float" />
      </div> */}

      <Container className="flex flex-col items-center text-center">
        <Badge variant="primary" size="md" className="mb-6 sm:mb-8">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance work
        </Badge>
        
        <AnimatedText
          as="h1"
          size="lg"
          align="center"
          title="Building fast, reliable web apps with the MERN stack"
          highlight="MERN stack"
          className="max-w-4xl"
        />

        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:mt-8 sm:text-lg sm:leading-8">
          I&apos;m Abdul Rafay, a full-stack developer who turns real business
          problems — payroll, CRM, inventory — into clean, working software
          using React, Next.js, Node.js, and MongoDB.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <Button size="lg" rightIcon={<ArrowUpRight className="h-5 w-5" />}>
            <a href="#projects">View Projects</a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            rightIcon={<Download className="h-5 w-5" />}
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
          <SocialButton
            href={SOCIAL_LINKS.github}
            icon={<GitBranch className="h-full w-full" />}
            label="GitHub"
          />
          <SocialButton
            href={SOCIAL_LINKS.linkedin}
            icon={<Send className="h-full w-full" />}
            label="LinkedIn"
          />
          <SocialButton
            href={SOCIAL_LINKS.email}
            icon={<Mail className="h-full w-full" />}
            label="Email"
            external={false}
          />
        </div>

        {/* Stats row */}
        <div className="mt-12 grid w-full max-w-xl grid-cols-1 gap-4 border-t border-border pt-8 sm:mt-16 sm:grid-cols-3 sm:gap-6 sm:pt-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-heading text-2xl font-bold gradient-text sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
