import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
import { Award, Users, Handshake, TrendingUp, ArrowRight } from "lucide-react";

const LavoraConNoi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <PageHero imageUrl={HERO_IMAGES.lavoraConNoi}>
          <div className="max-w-4xl px-4">
            <p className="font-display text-amber-200 text-xs sm:text-sm font-medium tracking-[0.3em] mb-4 sm:mb-6">LAVORA CON NOI</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.05] mb-6 sm:mb-8 drop-shadow-sm">
              Lavora con noi
            </h1>
          </div>
        </PageHero>
        {/* Top benefits grid removed — contents moved into the aside list below */}
        <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 md:pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Prose */}
                <div className="lg:col-span-7">
                    <div className="prose prose-invert max-w-none prose-lg md:px-16">
                    <h2 className="sr-only">Lavora con noi</h2>
                    <p className="text-xl sm:text-2xl leading-relaxed font-semibold font-serif text-foreground/90 pl-8 sm:pl-8">
                      Triveneta Immobiliare non è una semplice agenzia immobiliare. Costruiamo competenze, relazioni e percorsi di crescita nel real estate di qualità.
                    </p>

                    <ul className="mt-4 space-y-4 text-muted-foreground">
                      <li className="flex items-start gap-4">
                        <span className="mt-1 inline-flex w-4 h-4 rounded-full border border-amber-400 flex-shrink-0" aria-hidden="true" />
                        <p className="text-justify">Crediamo nelle persone prima degli immobili e lavoriamo in un contesto selettivo, dove competenza, comunicazione e attenzione al dettaglio fanno la differenza.</p>
                      </li>

                      <li className="flex items-start gap-4">
                        <span className="mt-1 inline-flex w-4 h-4 rounded-full border border-amber-400 flex-shrink-0" aria-hidden="true" />
                        <p className="text-justify">Chi entra nel nostro team cresce gradualmente su immobili di pregio, investimenti e operazioni complesse, costruendo relazioni solide con clienti e investitori.</p>
                      </li>

                      <li className="flex items-start gap-4">
                        <span className="mt-1 inline-flex w-4 h-4 rounded-full border border-amber-400 flex-shrink-0" aria-hidden="true" />
                        <p className="text-justify">Cerchiamo consulenti immobiliari con esperienza o profili junior motivati a un percorso strutturato.</p>
                      </li>

                      <li className="flex items-start gap-4">
                        <span className="mt-1 inline-flex w-4 h-4 rounded-full border border-amber-400 flex-shrink-0" aria-hidden="true" />
                        <p className="text-justify">Offriamo un brand riconosciuto, supporto operativo e accesso a un network qualificato. Valutiamo professionalità, attitudine alla consulenza, capacità relazionali e voglia di crescere.</p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right: Highlights + CTA */}
                <aside className="lg:col-span-5">
                  <div className="sticky top-24">
                    <div className="bg-card/40 rounded-2xl p-6 sm:p-8 shadow-md">
                      <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-4">Perché unirsi a noi</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary">
                            <Award className="w-4 h-4" />
                          </span>
                          <div>
                            <h4 className="font-serif text-md sm:text-lg font-medium text-foreground">Brand riconosciuto</h4>
                            <p className="text-sm text-muted-foreground">Lavora con un marchio riconosciuto nel real estate di pregio.</p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary">
                            <Users className="w-4 h-4" />
                          </span>
                          <div>
                            <h4 className="font-serif text-md sm:text-lg font-medium text-foreground">Supporto operativo</h4>
                            <p className="text-sm text-muted-foreground">Formazione, strumenti e affiancamento nelle trattative.</p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary">
                            <Handshake className="w-4 h-4" />
                          </span>
                          <div>
                            <h4 className="font-serif text-md sm:text-lg font-medium text-foreground">Network qualificato</h4>
                            <p className="text-sm text-muted-foreground">Accesso a partner e investitori selezionati.</p>
                          </div>
                        </li>

                        <li className="flex items-start gap-3">
                          <span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary">
                            <TrendingUp className="w-4 h-4" />
                          </span>
                          <div>
                            <h4 className="font-serif text-md sm:text-lg font-medium text-foreground">Crescita professionale</h4>
                            <p className="text-sm text-muted-foreground">Percorso strutturato su immobili di pregio e investimenti.</p>
                          </div>
                        </li>
                      </ul>

                      <div className="mt-6">
                        <Link to="/contatti" className="w-full inline-flex justify-center items-center gap-3 bg-primary text-primary-foreground px-5 py-3 rounded-full font-medium shadow hover:shadow-lg transition">
                          Candidati ora
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default LavoraConNoi;
