import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="relative border-2 sm:border-4 border-foreground bg-foreground text-background p-6 sm:p-12 lg:p-20 text-center overflow-hidden w-full max-w-full">
        {/* Subtle radial white texture */}
        <div className="absolute inset-0 pattern-radial-white pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto w-full">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-background/60 block mb-3 sm:mb-4">
            [ INITIATE ARCHITECTURE GENERATION ]
          </span>

          <h2 className="font-display font-normal text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-background mb-4 sm:mb-6 break-words">
            Scaffold Without Compromise.
          </h2>

          <p className="font-serif text-sm sm:text-base lg:text-lg text-background/80 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Specify your stack above or clone the repository to inspect the modular generator core.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            <Button
              asChild
              size="lg"
              className="gap-3 px-6 sm:px-8 h-11 sm:h-12 font-mono text-xs uppercase tracking-widest bg-background text-foreground border-2 border-background hover:bg-transparent hover:text-background transition-colors duration-100 w-full sm:w-auto"
            >
              <a href="#top">
                Start Generating
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
