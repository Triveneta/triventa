import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
import { 
  BarChart3, 
  Search, 
  TrendingUp, 
  Banknote, 
  Calculator, 
  FileText, 
  Wrench,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Valutazione immobiliare avanzata",
    desc: "Valutazione immobiliare avanzata tramite sistema proprietario basato su Big Data di mercato."
  },
  {
    icon: Search,
    title: "Ricerca e selezione di immobili",
    desc: "Ricerca e selezione di immobili, anche in location esclusive o off-market."
  },
  {
    icon: TrendingUp,
    title: "Strategie di investimento",
    desc: "Strategie di investimento immobiliare orientate alla creazione di rendite."
  },
  {
    icon: Banknote,
    title: "Finanza agevolata",
    desc: "Finanza agevolata e contributi per l’acquisto e la valorizzazione degli immobili."
  },
  {
    icon: Calculator,
    title: "Consulenza e supporto fiscale",
    desc: "Consulenza e supporto fiscale, inclusa la fiscalità internazionale."
  },
  {
    icon: FileText,
    title: "Gestione successioni e eredità",
    desc: "Gestione di successioni ed eredità immobiliari e relativi adempimenti."
  },
  {
    icon: Wrench,
    title: "Preventivi di ristrutturazione",
    desc: "Preventivi di ristrutturazione rapidi e automatizzati tramite rete di aziende convenzionate e cloud digitale condiviso."
  }
];

const Servizi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <PageHero imageUrl={HERO_IMAGES.servizi}>
          <div className="max-w-4xl px-4">
            <p className="font-display text-amber-200 text-xs sm:text-sm font-medium tracking-[0.3em] mb-4 sm:mb-6">SERVIZI</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-sm">
              Servizi immobiliari avanzati
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl drop-shadow-sm font-light">
              Triveneta immobiliare offre servizi immobiliari avanzati che integrano competenze specialistiche, tecnologia digitale e una rete di partner qualificati, garantendo un approccio strutturato e orientato al valore.
            </p>
          </div>
        </PageHero>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, i) => (
                <div 
                  key={i} 
                  className="group p-6 sm:p-8 md:p-10 bg-card border border-border rounded-xl shadow-sm hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-4 sm:mb-6">
              Hai bisogno di una consulenza?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
              Contattaci per scoprire come possiamo aiutarti con i nostri servizi immobiliari.
            </p>
            <Link 
              to="/contatti"
              className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground text-sm sm:text-base font-medium tracking-wider hover:bg-primary/90 transition-colors shadow-sm"
            >
              RICHIEDI INFORMAZIONI
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servizi;
