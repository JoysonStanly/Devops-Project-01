import { Rocket } from "lucide-react";
import { ThemeToggle } from "@/components";
import { APP_VERSION } from "../data/landing-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground bg-background/95 w-full max-w-full overflow-hidden">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 w-full">
        <a href="/" className="flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-80 min-w-0 max-w-[200px] sm:max-w-none">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none bg-foreground text-background border border-foreground">
            <Rocket className="h-4 w-4" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-display text-sm sm:text-base font-bold leading-none tracking-tight truncate">
              DEVOPS ARCHITECT
            </span>
            <span className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase mt-0.5 truncate">
              {APP_VERSION} · MANIFEST GENERATOR
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-mono uppercase tracking-widest">
          <a
            href="#generator-section"
            className="hover:underline underline-offset-4 decoration-1 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
          >
            Workspace
          </a>
          <a
            href="#features-section"
            className="hover:underline underline-offset-4 decoration-1 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
          >
            Capabilities
          </a>
          <a
            href="#output-section"
            className="hover:underline underline-offset-4 decoration-1 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
          >
            Specification
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
