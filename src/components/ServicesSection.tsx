import { Crown, Users, Calculator, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Area VIP Clienti",
    subtitle: "Immobili Esclusivi",
    description: "Accedi a una selezione riservata di proprietà premium non disponibili al pubblico.",
    buttonText: "Entra Ora",
    href: "#area-vip",
  },
  {
    icon: Users,
    title: "Area Segnalatori",
    subtitle: "Collabora e Guadagna",
    description: "Invia segnalazioni immobiliari e ricevi ricompense per ogni acquisizione conclusa.",
    buttonText: "Collabora",
    href: "#area-segnalatori",
  },
  {
    icon: Calculator,
    title: "Valuta la Tua Casa",
    subtitle: "Scopri il Valore",
    description: "Ottieni una valutazione professionale gratuita del tuo immobile dai nostri esperti.",
    buttonText: "Valuta Ora",
    href: "#valutazione",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background" id="servizi">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] mb-4">I NOSTRI SERVIZI</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Esperienza e Professionalità
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-9 h-9 text-primary" />
              </div>
              <p className="text-primary text-xs font-medium tracking-[0.2em] mb-2">{service.subtitle}</p>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wide hover:gap-3 transition-all"
              >
                {service.buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
