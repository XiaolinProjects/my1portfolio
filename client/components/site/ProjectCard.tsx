import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  className,
}: ProjectCardProps) {
  const content = (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/70 bg-card p-5 transition-all hover:shadow-lg",
        className,
      )}
    >
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70">{description}</p>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground border border-border/60"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}
