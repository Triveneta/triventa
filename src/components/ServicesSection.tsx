import { Link } from "react-router-dom";
import { Crown, Users, Calculator, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Area VIP Clienti",
    subtitle: "Immobili Esclusivi",
    description: "Accedi a una selezione riservata di proprietà premium non disponibili al pubblico.",
    buttonText: "Entra Ora",
    href: "/area-premium",
  },
  {
    icon: Users,
    title: "Area Segnalatori",
    subtitle: "Collabora e Guadagna",
    description: "Invia segnalazioni immobiliari e ricevi ricompense per ogni acquisizione conclusa.",
    buttonText: "Collabora",
    href: "/acquisto",
  },
  {
    icon: Calculator,
    title: "Valuta la Tua Casa",
    subtitle: "Scopri il Valore",
    description: "Ottieni una valutazione professionale gratuita del tuo immobile dai nostri esperti.",
    buttonText: "Valuta Ora",
    href: "/vendita",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-32 lg:py-40 bg-card/30" id="servizi">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 lg:mb-28">
          <p className="font-display text-primary text-xs font-medium tracking-[0.35em] mb-6">I NOSTRI SERVIZI</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight">
            Esperienza e Professionalità
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group text-center p-10 lg:p-12 rounded-xl border border-border/50 bg-card shadow-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto rounded-full border border-primary/15 bg-primary/5 flex items-center justify-center mb-8 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <p className="font-display text-primary text-[10px] font-medium tracking-[0.35em] mb-4">{service.subtitle}</p>
              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-5 tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-base">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest group-hover:gap-3 transition-all">
                {service.buttonText}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
