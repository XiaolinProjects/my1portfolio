import ProjectCard from "@/components/site/ProjectCard";

const sample = [
  {
    title: "Minimalist Dashboard",
    description: "A clean analytics dashboard with charts, theming, and responsive layout.",
    tags: ["React", "Tailwind", "Recharts"],
  },
  {
    title: "E‑commerce UI Kit",
    description: "Reusable components for storefronts: product cards, carts, and checkout.",
    tags: ["UI", "Accessibility", "Design"],
  },
  {
    title: "3D Landing",
    description: "Interactive hero section built with Three.js and smooth scroll effects.",
    tags: ["Three.js", "r3f", "Motion"],
  },
];

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h1>
      </div>
      <p className="mt-4 text-foreground/70 max-w-2xl">
        A selection of work. Tell me which projects you want to showcase and I can tailor this page with full case studies, images, and links.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
