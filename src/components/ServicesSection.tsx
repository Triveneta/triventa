import { Crown, Users, Calculator } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: Crown,
      title: "Area VIP Clienti",
      description:
        "Immobili Esclusivi. Accedi a una selezione riservata di proprietà premium non disponibili al pubblico. Trattative riservate per clienti esclusivi.",
      buttonText: "Entra Ora",
      href: "#area-vip",
    },
    {
      icon: Users,
      title: "Area Segnalatori",
      description:
        "Collabora e Guadagna. Invia segnalazioni di opportunità immobiliari e ricevi ricompense per ogni acquisizione conclusa con successo.",
      buttonText: "Collabora",
      href: "#area-segnalatori",
    },
    {
      icon: Calculator,
      title: "Valuta la Tua Casa",
      description:
        "Scopri il Valore del Tuo Immobile. Ottieni una valutazione professionale gratuita del tuo immobile dai nostri esperti del territorio.",
      buttonText: "Valuta Ora",
      href: "#valutazione",
    },
  ];

  return (
    <section className="py-24 bg-background" id="servizi">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Esperienza e Professionalità al Tuo Servizio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Da oltre 20 anni, la tua agenzia immobiliare di fiducia nel Triveneto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
