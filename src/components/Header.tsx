import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "VENDITA", href: "#vendita" },
    { name: "ACQUISTO", href: "#acquisto" },
    { name: "INVESTIMENTI", href: "#investimenti" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
              <div className="w-8 h-8 text-primary">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8 2 4 6 4 12c0 4 2 7 5 9l3-3 3 3c3-2 5-5 5-9 0-6-4-10-8-10z" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold tracking-wide text-foreground">
                TRIVENETA IMMOBILIARE
              </h1>
              <p className="text-xs text-primary tracking-widest">Premium Real Estate</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#area-premium"
              className="px-6 py-2.5 border border-primary text-primary text-sm font-medium tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              AREA CLIENTI PREMIUM
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-wider text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#area-premium"
                className="px-6 py-2.5 border border-primary text-primary text-sm font-medium tracking-wider text-center hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => setIsOpen(false)}
              >
                AREA CLIENTI PREMIUM
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
