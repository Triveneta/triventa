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
    <section className="relative py-28 lg:py-36 bg-card/50" id="servizi">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 lg:mb-24">
          <p className="font-display text-primary text-xs font-medium tracking-[0.35em] mb-4">I NOSTRI SERVIZI</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
            Esperienza e Professionalità
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group text-center p-8 lg:p-10 rounded-sm border border-white/5 bg-background/50 hover:border-primary/20 hover:bg-background/80 transition-all duration-500"
            >
              <div className="w-20 h-20 mx-auto rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center mb-8 group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors duration-500">
                <service.icon className="w-9 h-9 text-primary" />
              </div>
              <p className="font-display text-primary text-[10px] font-medium tracking-[0.35em] mb-3">{service.subtitle}</p>
              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-4 tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm lg:text-base">{service.description}</p>
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
