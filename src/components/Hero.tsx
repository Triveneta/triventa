import heroImage from "@/assets/hero-triveneto.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col">
      {/* Background Image - Full visibility */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Very subtle gradient only at top for nav readability and bottom for CTAs */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground text-center mb-4 drop-shadow-lg">
          Triveneta Immobiliare
        </h2>
        <p className="text-lg md:text-xl text-foreground/90 text-center max-w-xl drop-shadow-md">
          Il tuo partner di fiducia per trovare e vendere casa in Triveneto.
        </p>
      </div>

      {/* Bottom CTAs - Fixed at bottom */}
      <div className="relative z-10 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main 3 CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mb-6">
            <a
              href="#cerca-casa"
              className="w-full sm:w-auto sm:min-w-[200px] py-4 px-8 text-center text-sm font-medium tracking-[0.2em] text-foreground border-b sm:border-b-0 sm:border-r border-foreground/30 hover:text-primary transition-colors"
            >
              CERCA CASA
            </a>
            <a
              href="#vendi-casa"
              className="w-full sm:w-auto sm:min-w-[200px] py-4 px-8 text-center text-sm font-medium tracking-[0.2em] text-foreground border-b sm:border-b-0 sm:border-r border-foreground/30 hover:text-primary transition-colors"
            >
              VENDI CASA
            </a>
            <a
              href="#investi"
              className="w-full sm:w-auto sm:min-w-[200px] py-4 px-8 text-center text-sm font-medium tracking-[0.2em] text-foreground hover:text-primary transition-colors"
            >
              INVESTI IN IMMOBILI
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="flex justify-center">
            <a
              href="#case-vacanza"
              className="px-10 py-3 bg-foreground/10 backdrop-blur-sm border border-foreground/30 text-foreground text-sm font-medium tracking-[0.15em] hover:bg-foreground/20 hover:border-foreground/50 transition-all"
            >
              CASE VACANZA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
