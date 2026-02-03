import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-background py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <p className="font-display text-primary text-xs font-medium tracking-[0.35em] mb-4 sm:mb-6">
            ESPERIENZA & RELAZIONI
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight mb-6 sm:mb-8">
            Consulenza Real Estate
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Il nostro obiettivo è creare valore reale nel mercato immobiliare, accompagnando clienti e investitori 
            in scelte consapevoli, riservate e costruite nel tempo.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Chi Siamo Card */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
            <img
              src="/760x470xc.webp"
              alt="Chi siamo - Il nostro team"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 via-background/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3 sm:mb-4 md:mb-5 drop-shadow-sm">
                Chi siamo
              </h3>
              <p className="text-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-lg drop-shadow-sm">
                Triveneta Immobiliare – Premium Real Estate è un'agenzia immobiliare di nuova generazione 
                che unisce competenze consulenziali, digitale e un vasto network relazionale.
              </p>
            </div>
          </div>

          {/* Servizi Card */}
          <Link to="/acquisto" className="group relative overflow-hidden rounded-xl shadow-lg min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
            <img
              src="/2200xxs.webp"
              alt="I nostri servizi"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 via-background/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3 sm:mb-4 md:mb-5 drop-shadow-sm">
                Servizi
              </h3>
              <p className="text-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-lg drop-shadow-sm">
                Offriamo competenze, conoscenze e abilità per un servizio di alta qualità 
                rivolto a clienti e investitori che cercano immobili di pregio.
              </p>
              <span className="inline-flex items-center font-display text-xs tracking-[0.2em] text-foreground border-2 border-foreground/60 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 w-fit hover:bg-foreground hover:text-background transition-all backdrop-blur-sm">
                VEDI I SERVIZI
              </span>
            </div>
          </Link>
        </div>

        {/* Chi Siamo Detail Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-36 border-t border-border/20 pt-12 sm:pt-16 md:pt-20">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 sm:mb-8">
              Chi siamo
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              <span className="text-foreground font-medium">Triveneta Immobiliare</span> – Premium Real Estate è un'agenzia immobiliare di nuova generazione 
              che unisce competenze consulenziali, digitali e un vasto network relazionale. Questo permette l'accesso 
              a opportunità di acquisto e investimento uniche e l'affiancamento di investitori partendo da obiettivi di rendimento.
            </p>
          </div>

          {/* Team */}
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-muted-foreground text-xs sm:text-sm text-center mb-8 sm:mb-10">
              Nasce dall'intuizione dei soci fondatori e dal team:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
              {/* Luca Bazzanella */}
              <div className="text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
                  <img src="/team/luca-bazzanella.png" alt="Luca Bazzanella" className="w-full h-full object-cover object-top" />
                </div>
                <h4 className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground mb-1 sm:mb-2">
                  Luca Bazzanella
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                  Manager, consulenza strategica, finanza e M&A
                </p>
              </div>

              {/* Francesco Mariotti */}
              <div className="text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
                  <img src="/team/francesco-mariotti.png" alt="Francesco Mariotti" className="w-full h-full object-cover object-top" />
                </div>
                <h4 className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground mb-1 sm:mb-2">
                  Francesco Mariotti
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                  CEO, Ingegnere specializzato in operazioni immobiliari
                </p>
              </div>

              {/* Sintija Birgele */}
              <div className="text-center col-span-2 md:col-span-1">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
                  <img src="/team/sintija-birgele.png" alt="Sintija Birgele" className="w-full h-full object-cover object-top" />
                </div>
                <h4 className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground mb-1 sm:mb-2">
                  Sintija Birgele
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                  IT Expert, partner of European Management
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
