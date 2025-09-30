import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-primary/70 text-primary-foreground grid place-items-center font-bold">
            H
          </div>
          <span className="font-semibold tracking-tight">Hao</span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-primary transition-colors ${isActive ? "text-primary" : "text-foreground/70"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-primary transition-colors ${isActive ? "text-primary" : "text-foreground/70"}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-primary transition-colors ${isActive ? "text-primary" : "text-foreground/70"}`
            }
          >
            About
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild>
            <a href="mailto:hello@example.com" aria-label="Email Hao">
              Contact
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
