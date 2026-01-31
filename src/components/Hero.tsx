import heroImage from "@/assets/hero-triveneto.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-gradient" />
        
        {/* Geometric Accent */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary/30 rotate-45 transform -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary/20 rotate-12" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 animate-fade-in">
          Premium Real Estate
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Il tuo partner di fiducia per trovare e vendere casa in Triveneto.
        </p>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#cerca-casa"
            className="btn-outline-premium px-8 py-4 text-sm font-medium tracking-widest min-w-[200px]"
          >
            CERCA CASA
          </a>
          <a
            href="#vendi-casa"
            className="btn-outline-premium px-8 py-4 text-sm font-medium tracking-widest min-w-[200px]"
          >
            VENDI CASA
          </a>
          <a
            href="#investi"
            className="btn-outline-premium px-8 py-4 text-sm font-medium tracking-widest min-w-[200px]"
          >
            INVESTI IN IMMOBILI
          </a>
        </div>

        {/* Secondary CTA */}
        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#case-vacanza"
            className="inline-block px-8 py-3 bg-secondary/50 backdrop-blur-sm border border-foreground/20 text-foreground/90 text-sm font-medium tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
          >
            CASE VACANZA
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
