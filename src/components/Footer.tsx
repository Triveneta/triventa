import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ShieldCheck, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PrivacyConsentModal, usePrivacyConsent } from "@/components/PrivacyConsentModal";

const Footer = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const { hasConsent, acceptConsent } = usePrivacyConsent();

  useEffect(() => {
    if (!hasConsent) setPrivacyModalOpen(true);
  }, [hasConsent]);

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Triveneta Immobiliare - Premium Real Estate" className="h-12 mb-6" />
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              La tua agenzia immobiliare di fiducia nel Triveneto. Esperienza, professionalità e passione al servizio dei tuoi progetti.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-sm">
              © 2026 Triveneta Immobiliare. Tutti i diritti riservati.
            </p>
            <p className="text-muted-foreground text-xs">
              Sviluppato da{" "}
              <a
                href="https://de.linkedin.com/in/sintija-birgele"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Sintija Birgele
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <button type="button" onClick={() => setPrivacyModalOpen(true)} className="text-muted-foreground hover:text-primary transition-colors">
              Termini
            </button>
          </div>
        </div>
      </div>

      <PrivacyConsentModal
        open={privacyModalOpen}
        onAccept={() => {
          acceptConsent();
          setPrivacyModalOpen(false);
        }}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-4 right-4 z-50 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white border border-slate-200"
        onClick={() => setPrivacyModalOpen(true)}
        aria-label="Privacy Policy"
      >
        <ShieldCheck className="h-5 w-5 text-slate-600" />
      </Button>
    </footer>
  );
};

export default Footer;
