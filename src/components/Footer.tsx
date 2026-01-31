import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Triveneta Immobiliare - Premium Real Estate" className="h-12 mb-6" />
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              La tua agenzia immobiliare di fiducia nel Triveneto. Esperienza, professionalità e passione al servizio dei tuoi progetti.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6 tracking-tight">Servizi</h4>
            <ul className="space-y-3">
              <li><Link to="/acquisto" className="text-muted-foreground hover:text-primary transition-colors">Compra Casa</Link></li>
              <li><Link to="/vendita" className="text-muted-foreground hover:text-primary transition-colors">Vendi Casa</Link></li>
              <li><Link to="/investimenti" className="text-muted-foreground hover:text-primary transition-colors">Investimenti</Link></li>
              <li><Link to="/vendita" className="text-muted-foreground hover:text-primary transition-colors">Valutazione</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Case Vacanza</Link></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6 tracking-tight">Zone</h4>
            <ul className="space-y-3">
              <li><Link to="/vendita" className="text-muted-foreground hover:text-primary transition-colors">Lago di Garda</Link></li>
              <li><Link to="/vendita" className="text-muted-foreground hover:text-primary transition-colors">Verona</Link></li>
              <li><Link to="/vendita" className="text-muted-foreground hover:text-primary transition-colors">Trentino</Link></li>
              <li><Link to="/vendita" className="text-muted-foreground hover:text-primary transition-colors">Friuli V.G.</Link></li>
              <li><Link to="/vendita" className="text-muted-foreground hover:text-primary transition-colors">Veneto</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Triveneta Immobiliare. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Cookie</Link>
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Termini</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
