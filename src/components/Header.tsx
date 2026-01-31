import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-triveneta.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "VENDITA", href: "#vendita" },
    { name: "ACQUISTO", href: "#acquisto" },
    { name: "INVESTIMENTI", href: "#investimenti" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Triveneta Immobiliare" 
              className="h-12 md:h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-[0.15em] text-foreground/90 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#area-premium"
              className="px-6 py-2.5 border border-primary text-primary text-sm font-medium tracking-[0.1em] hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              AREA CLIENTI PREMIUM
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border/30 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-[0.15em] text-foreground/90 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#area-premium"
                className="px-6 py-2.5 border border-primary text-primary text-sm font-medium tracking-[0.1em] text-center hover:bg-primary hover:text-primary-foreground transition-all"
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
