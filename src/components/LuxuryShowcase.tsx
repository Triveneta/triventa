import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const showcaseItems = [
  {
    image: "/760x470xc.webp",
    label: "VENDITA",
    title: "Vendi con Triveneta",
    subtitle: "Valorizza il tuo immobile con i nostri esperti",
    href: "/vendita",
  },
  {
    image: "/2200xxs.webp",
    label: "ACQUISTO",
    title: "Trova la Tua Casa",
    subtitle: "Proprietà selezionate in tutto il Triveneto",
    href: "/acquisto",
  },
  {
    image: "/2200xxs%20(1).webp",
    label: "INVESTIMENTI",
    title: "Investi in Immobili",
    subtitle: "Opportunità esclusive per investitori",
    href: "/investimenti",
  },
];

const LuxuryShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-background" aria-label="Scopri i nostri servizi">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-display text-primary text-xs font-medium tracking-[0.35em] mb-4">
            SCOPRI TRIVENETA
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
            Vendita · Acquisto · Investimenti
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {showcaseItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group group/card block"
            >
              <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[3/4] rounded-sm border border-white/10 bg-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                />
                {/* Luxury overlay gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 transition-opacity duration-500 group-hover/card:opacity-95"
                  aria-hidden
                />
                {/* Gold accent line on hover */}
                <div className="absolute inset-0 border border-primary/0 group-hover/card:border-primary/30 transition-colors duration-500 rounded-sm pointer-events-none" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <span className="font-display text-primary text-[10px] font-medium tracking-[0.4em] mb-2">
                    {item.label}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 max-w-xs">
                    {item.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest group-hover:gap-3 transition-all">
                    Scopri
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default LuxuryShowcase;
