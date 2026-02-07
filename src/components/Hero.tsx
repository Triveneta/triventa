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

      {/* Empty space for full-screen hero image */}
      <div className="relative z-10 flex-1" />

      {/* Bottom CTAs - Centered menu with CASE VACANZA (explicit light for dark hero) */}
      <div className="relative z-10 pb-8 px-6 flex flex-col items-center">
        {/* Main 3 CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mb-6">
          <Link
            to="/acquisto"
            className="font-display w-full sm:w-auto sm:min-w-[200px] py-4 px-8 text-center text-sm font-medium tracking-[0.2em] text-white border-b sm:border-b-0 sm:border-r border-white/30 hover:text-amber-200 transition-colors"
          >
            CERCA CASA
          </Link>
          <Link
            to="/investimenti"
            className="font-display w-full sm:w-auto sm:min-w-[200px] py-4 px-8 text-center text-sm font-medium tracking-[0.2em] text-white hover:text-amber-200 transition-colors"
          >
            Opportunità di Investimento
          </Link>
        </div>

        {/* CASE VACANZA - centered on mobile, slightly left on desktop */}
        <a
          href="#immobili"
          className="font-display px-10 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm font-medium tracking-[0.15em] hover:bg-white/20 hover:border-white/50 transition-all sm:-translate-x-8"
        >
          CASE VACANZA
        </a>
      </div>
    </section>
  );
};

export default Hero;
