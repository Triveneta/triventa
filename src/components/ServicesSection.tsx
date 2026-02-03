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
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-card/30" id="servizi">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28">
          <p className="font-display text-primary text-xs font-medium tracking-[0.35em] mb-4 sm:mb-6">I NOSTRI SERVIZI</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight px-4">
            Esperienza e Professionalità
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group text-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl border border-border/50 bg-card shadow-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-full border border-primary/15 bg-primary/5 flex items-center justify-center mb-6 sm:mb-8 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary" />
              </div>
              <p className="font-display text-primary text-[10px] font-medium tracking-[0.35em] mb-3 sm:mb-4">{service.subtitle}</p>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-foreground mb-4 sm:mb-5 tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium tracking-widest group-hover:gap-3 transition-all">
                {service.buttonText}
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
