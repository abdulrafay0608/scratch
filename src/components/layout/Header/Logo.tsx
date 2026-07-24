import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Abdul Rafay Portfolio"
      className={cn(
        "group inline-flex items-center gap-3 select-none",
        className,
      )}
    >
      {/* Logo Icon */}
      <div
        className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          // bg-linear-to-br
          from-indigo-600
          via-violet-600
          to-cyan-500
          text-lg
          font-black
          text-white
          shadow-lg
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <span className="relative z-10">AR</span>

        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_60%)]
          "
        />
      </div>

      {/* Brand Name */}
      <div className="hidden sm:flex flex-col leading-none">
        <span className="font-heading text-lg font-bold tracking-tight">
          Abdul Rafay
        </span>

        <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
          Full Stack Developer
        </span>
      </div>
    </Link>
  );
}
