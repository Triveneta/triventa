import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo-triveneta.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Triveneta Immobiliare" className="h-12 mb-6" />
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
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">Servizi</h4>
            <ul className="space-y-3">
              {["Compra Casa", "Vendi Casa", "Investimenti", "Valutazione", "Case Vacanza"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">Zone</h4>
            <ul className="space-y-3">
              {["Lago di Garda", "Verona", "Trentino", "Friuli V.G.", "Veneto"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Triveneta Immobiliare. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termini</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
