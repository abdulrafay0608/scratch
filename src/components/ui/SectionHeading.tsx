import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  gradient?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  gradient,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-16 flex flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {badge && (
        <span
          className="
            mb-4
            inline-flex
            items-center
            rounded-full
            border
            border-indigo-500/20
            bg-indigo-500/10
            px-4
            py-1
            text-sm
            font-medium
            tracking-wider
            uppercase
            text-indigo-500
          "
        >
          {badge}
        </span>
      )}

      <h2
        className="
          max-w-4xl
          font-heading
          text-4xl
          font-bold
          leading-tight
          tracking-tight
          sm:text-5xl
          lg:text-6xl
        "
      >
        {title}

        {gradient && (
          <>
            {" "}
            <span className="gradient-text">{gradient}</span>
          </>
        )}
      </h2>

      {description && (
        <p
          className="
            mt-6
            max-w-2xl
            text-base
            leading-8
            text-muted
            sm:text-lg
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
