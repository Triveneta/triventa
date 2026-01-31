import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-triveneto.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col">
      {/* Background Image - Full visibility */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Three-zone gradient: hero image → transition → dark section background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom,
              hsl(220 50% 8% / 0.35) 0%,
              transparent 35%,
              transparent 50%,
              hsl(220 50% 8% / 0.4) 70%,
              hsl(220 50% 8% / 0.9) 85%,
              hsl(220 50% 8%) 100%
            )`,
          }}
        />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground text-center mb-4 drop-shadow-lg tracking-wide">
          Triveneta Immobiliare
        </h2>
        <p className="text-lg md:text-xl text-foreground/90 text-center max-w-xl drop-shadow-md">
          Il tuo partner di fiducia per trovare e vendere casa in Triveneto.
        </p>
      </div>

      {/* Bottom CTAs - Centered menu with CASE VACANZA */}
      <div className="relative z-10 pb-8 px-6 flex flex-col items-center">
        {/* Main 3 CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mb-6">
          <Link
            to="/acquisto"
            className="font-display w-full sm:w-auto sm:min-w-[200px] py-4 px-8 text-center text-sm font-medium tracking-[0.2em] text-foreground border-b sm:border-b-0 sm:border-r border-foreground/30 hover:text-primary transition-colors"
          >
            CERCA CASA
          </Link>
          <Link
            to="/vendita"
            className="font-display w-full sm:w-auto sm:min-w-[200px] py-4 px-8 text-center text-sm font-medium tracking-[0.2em] text-foreground border-b sm:border-b-0 sm:border-r border-foreground/30 hover:text-primary transition-colors"
          >
            VENDI CASA
          </Link>
          <Link
            to="/investimenti"
            className="font-display w-full sm:w-auto sm:min-w-[200px] py-4 px-8 text-center text-sm font-medium tracking-[0.2em] text-foreground hover:text-primary transition-colors"
          >
            INVESTI IN IMMOBILI
          </Link>
        </div>

        {/* CASE VACANZA - slightly left of center */}
        <Link
          to="/"
          className="font-display px-10 py-3 bg-foreground/10 backdrop-blur-sm border border-foreground/30 text-foreground text-sm font-medium tracking-[0.15em] hover:bg-foreground/20 hover:border-foreground/50 transition-all -translate-x-8"
        >
          CASE VACANZA
        </Link>
      </div>
    </section>
  );
};

export default Hero;
