import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/site/ProjectCard";

const projects = [
  {
    title: "Minimalist Dashboard",
    description: "Analytics dashboard with clean typography, charts, and theming.",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    title: "E‑commerce UI Kit",
    description: "Composable storefront components for fast prototyping.",
    tags: ["Design System", "Accessibility"],
  },
  {
    title: "Personal Blog",
    description: "A performant, content-focused blog with MDX and SEO.",
    tags: ["Content", "SEO", "MDX"],
  },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_50%_-10%,hsl(var(--primary)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 py-24 md:py-32">
          <p className="text-sm uppercase tracking-widest text-primary">Portfolio</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Hao — designer & developer building crisp, modern web experiences.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground/70">
            I craft fast, accessible interfaces with a focus on clarity and delightful details.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild className="">
              <a href="mailto:hello@example.com">Email me</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="/projects">View projects</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Selected Work</h2>
          <a href="/projects" className="text-sm text-primary hover:underline">See all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About me</h2>
            <p className="mt-4 text-foreground/70">
              I'm Hao, a full‑stack engineer who turns ideas into polished products. From design systems to data‑driven apps, I build with care and precision.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Node",
                "Tailwind",
                "Accessibility",
                "Testing",
              ].map((s) => (
                <span key={s} className="inline-flex items-center rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground border border-border/60">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li>• UI/UX for web apps and marketing sites</li>
              <li>• Frontend architecture and performance</li>
              <li>• Component libraries and design systems</li>
              <li>• Integration with APIs and backends</li>
            </ul>
            <div className="mt-6">
              <Button asChild variant="outline">
                <a href="/about">More about me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-4 pb-24">
        <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Let's build something</h2>
          <p className="mt-3 max-w-2xl text-foreground/70">
            Have a project in mind or want to collaborate? I'm available for select engagements.
          </p>
          <div className="mt-6">
            <Button asChild>
              <a href="mailto:hello@example.com">Get in touch</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
