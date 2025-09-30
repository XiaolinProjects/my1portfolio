import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Hao. All rights reserved.</p>
        <div className="flex items-center gap-4 text-foreground/70">
          <a href="mailto:hello@example.com" className="hover:text-primary" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
