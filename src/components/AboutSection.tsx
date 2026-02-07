import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <p className="font-display text-primary text-xs font-medium tracking-[0.35em] mb-4 sm:mb-6">
            ESPERIENZA & RELAZIONI
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight mb-6 sm:mb-8">
            Eccellenza nel Real Estate
          </h2>
          <p className="text-foreground/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 font-serif font-medium tracking-wide">
            Un approccio distintivo alla consulenza immobiliare, dove competenza e discrezione si incontrano.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Chi Siamo Card */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[480px] xl:min-h-[560px]">
            <img
              src="/760x470xc.webp"
              alt="Chi siamo - Il nostro team"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
            <div className="absolute inset-0 flex items-center p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="w-full md:w-5/6 lg:w-3/4">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 drop-shadow">
                  Chi siamo
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl opacity-95">
                  Triveneta Immobiliare non è una semplice agenzia immobiliare. Costruiamo competenze, relazioni e percorsi di crescita nel real estate di qualità. Crediamo nelle persone prima degli immobili e lavoriamo in un contesto selettivo, dove competenza, comunicazione e attenzione al dettaglio fanno la differenza.
                </p>
                <div className="mt-4">
                  <Link to="/chi-siamo" className="inline-flex items-center font-display text-xs tracking-[0.2em] text-black bg-white rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 w-fit hover:shadow-lg transition-all">
                    SCOPRI CHI SIAMO
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Servizi Card */}
          <Link to="/servizi" className="group relative overflow-hidden rounded-xl shadow-lg min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[480px] xl:min-h-[560px]">
            <img
              src="/2200xxs.webp"
              alt="I nostri servizi"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
            <div className="absolute inset-0 flex items-center p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="w-full md:w-4/5 lg:w-3/5">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 drop-shadow">
                  Servizi
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl opacity-95 mb-6">
                  Offriamo un brand riconosciuto, supporto operativo e accesso a un network qualificato. Valutiamo professionalità, attitudine alla consulenza, capacità relazionali e voglia di crescere.
                </p>
                <span className="inline-flex items-center font-display text-xs tracking-[0.2em] text-black bg-white rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 w-fit hover:shadow-lg transition-all">
                  VEDI I SERVIZI
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Chi Siamo Detail Section */}
        <div className="border-t border-border/20 pt-12 sm:pt-16 md:pt-20">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 sm:mb-8">
              Chi siamo
            </h3>
            <p className="text-foreground/90 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-serif font-medium">
              <span className="text-foreground font-semibold">Triveneta Immobiliare</span> – Premium Real Estate è un'agenzia immobiliare di nuova generazione
              che unisce competenze consulenziali, digitali e un vasto network relazionale. Questo permette l'accesso
              a opportunità di acquisto e investimento uniche e l'affiancamento di investitori partendo da obiettivi di rendimento.
            </p>
            <p className="text-foreground/90 text-base sm:text-lg pt-5 md:text-xl max-w-4xl mx-auto leading-relaxed font-serif font-medium">
              Nasce dall'intuizione dei soci fondatori e dal team:
            </p>
          </div>

          {/* Team */}
          <div className="max-w-5xl mx-auto px-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
              {/* Luca Bazzanella */}
              <div className="text-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
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
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
                  <img src="/team/francesco-mariotti.jpg" alt="Francesco Mariotti" className="w-full h-full object-cover object-top" />
                </div>
                <h4 className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground mb-1 sm:mb-2">
                  Francesco Mariotti
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                  CEO, Ingegnere specializzato in operazioni immobiliari
                </p>
              </div>

              {/* Sintija Birgele */}
              <div className="text-center md:col-span-1">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
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
