import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const HERO_HEIGHT_THRESHOLD = 0.85; // switch to light header when past ~85% of viewport height

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const isHome = useLocation().pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const checkScroll = () => {
      const threshold = window.innerHeight * HERO_HEIGHT_THRESHOLD;
      setScrolledPastHero(window.scrollY > threshold);
    };
    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [isHome]);

  const navLinks = [
    { name: "CHI SIAMO", href: "/chi-siamo" },
    { name: "SERVIZI", href: "/servizi" },
    { name: "INVESTIMENTI", href: "/investimenti" },
    { name: "LAVORA CON NOI", href: "/lavora-con-noi" },
    { name: "CONTATTI", href: "/contatti" },
  ];

  // Light header: on all non-home pages, or on home when scrolled below hero (light section)
  const headerLight = !isHome || scrolledPastHero;
  const textClass = headerLight ? "text-foreground/90 hover:text-primary" : "text-white/90 hover:text-amber-200";
  const borderClass = headerLight ? "border-border/30" : "border-white/20";
  const bgClass = headerLight ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-gradient-to-b from-transparent to-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${bgClass} backdrop-blur-sm transition-colors duration-300`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo: dark version only at top of landing (hero); light version for all pages and landing below hero */}
          <Link to="/" className="flex items-center">
            <img 
              src={headerLight ? "/logo.png" : "/logo-dark.png"} 
              alt="Triveneta Immobiliare - Premium Real Estate" 
              className={`w-auto transition-all duration-300 ${headerLight ? "h-14 md:h-16" : "h-16 md:h-18 lg:h-20"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-display text-xs font-medium tracking-[0.12em] ${textClass} transition-colors duration-300`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/area-premium"
              className={`font-display px-6 py-2.5 border text-xs font-medium tracking-[0.08em] transition-all duration-300 ${
                headerLight 
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" 
                  : "border-white/40 text-white hover:bg-white/10 hover:border-white/60"
              }`}
            >
              AREA CLIENTI PREMIUM
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${headerLight ? "text-foreground" : "text-white"}`}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className={`lg:hidden mt-4 pb-4 border-t ${borderClass} pt-4`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-display text-xs font-medium tracking-[0.12em] ${textClass} transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/area-premium"
                  className={`font-display px-6 py-2.5 border text-xs font-medium tracking-[0.08em] text-center transition-all ${
                  headerLight 
                    ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" 
                    : "border-white/40 text-white hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                AREA CLIENTI PREMIUM
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
