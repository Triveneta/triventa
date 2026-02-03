import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-primary text-xs font-medium tracking-[0.35em] mb-4">
            ESPERIENZA & RELAZIONI
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight mb-6">
            Consulenza Real Estate
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Il nostro obiettivo è creare valore reale nel mercato immobiliare, accompagnando clienti e investitori 
            in scelte consapevoli, riservate e costruite nel tempo.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Chi Siamo Card */}
          <div className="group relative overflow-hidden rounded-sm aspect-[4/3]">
            <img
              src="/760x470xc.webp"
              alt="Chi siamo - Il nostro team"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-3">
                Chi siamo
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4 max-w-sm">
                Triveneta Immobiliare – Premium Real Estate è un'agenzia immobiliare di nuova generazione 
                che unisce competenze consulenziali, digitale e un vasto network relazionale.
              </p>
            </div>
          </div>

          {/* Servizi Card */}
          <Link to="/acquisto" className="group relative overflow-hidden rounded-sm aspect-[4/3]">
            <img
              src="/2200xxs.webp"
              alt="I nostri servizi"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-3">
                Servizi
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4 max-w-sm">
                Offriamo competenze, conoscenze e abilità per un servizio di alta qualità 
                rivolto a clienti e investitori che cercano immobili di pregio.
              </p>
              <span className="inline-flex items-center font-display text-xs tracking-[0.2em] text-foreground border border-foreground/50 px-4 py-2 w-fit hover:bg-foreground hover:text-background transition-all">
                VEDI I SERVIZI
              </span>
            </div>
          </Link>
        </div>

        {/* Chi Siamo Detail Section */}
        <div className="mt-24 lg:mt-32 border-t border-border/30 pt-16">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Chi siamo
            </h3>
            <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed">
              <span className="text-foreground font-medium">Triveneta Immobiliare</span> – Premium Real Estate è un'agenzia immobiliare di nuova generazione 
              che unisce competenze consulenziali, digitali e un vasto network relazionale. Questo permette l'accesso 
              a opportunità di acquisto e investimento uniche e l'affiancamento di investitori partendo da obiettivi di rendimento.
            </p>
          </div>

          {/* Founders */}
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground text-sm text-center mb-10">
              Nasce dall'intuizione dei due soci fondatori:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Francesco Mariotti */}
              <div className="text-center">
                <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full overflow-hidden bg-secondary border-2 border-primary/20">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <span className="font-serif text-4xl text-primary/50">FM</span>
                  </div>
                </div>
                <h4 className="font-serif text-xl font-medium text-foreground mb-1">
                  Francesco Mariotti
                </h4>
                <p className="text-muted-foreground text-sm">
                  Ingegnere specializzato in operazioni immobiliari
                </p>
              </div>

              {/* Luca Bazzanella */}
              <div className="text-center">
                <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full overflow-hidden bg-secondary border-2 border-primary/20">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <span className="font-serif text-4xl text-primary/50">LB</span>
                  </div>
                </div>
                <h4 className="font-serif text-xl font-medium text-foreground mb-1">
                  Luca Bazzanella
                </h4>
                <p className="text-muted-foreground text-sm">
                  Manager esperto in consulenza strategica, finanza e M&A
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
