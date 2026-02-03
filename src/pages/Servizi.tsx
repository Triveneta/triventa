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
    title: "Valutazione Immobiliare Avanzata",
    desc: "Sistema proprietario basato su Big Data di mercato per valutazioni rapide, precise e aggiornate."
  },
  {
    icon: Search,
    title: "Ricerca e Selezione Immobili",
    desc: "Ricerca di immobili anche in location esclusive o off-market, con accesso a opportunità uniche."
  },
  {
    icon: TrendingUp,
    title: "Strategie di Investimento",
    desc: "Consulenza immobiliare orientata alla creazione di rendite e pianificazione strategica."
  },
  {
    icon: Banknote,
    title: "Finanza Agevolata",
    desc: "Accesso a contributi e agevolazioni per l'acquisto e la valorizzazione degli immobili."
  },
  {
    icon: Calculator,
    title: "Consulenza Fiscale",
    desc: "Supporto fiscale completo, inclusa la fiscalità internazionale per investitori esteri."
  },
  {
    icon: FileText,
    title: "Gestione Successioni",
    desc: "Gestione di eredità immobiliari e relativi adempimenti burocratici."
  },
  {
    icon: Wrench,
    title: "Preventivi Ristrutturazione",
    desc: "Preventivi rapidi e automatizzati tramite rete di aziende convenzionate e cloud digitale condiviso."
  }
];

const Servizi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero imageUrl={HERO_IMAGES.servizi}>
          <div className="max-w-4xl">
            <p className="font-display text-amber-200 text-sm font-medium tracking-[0.3em] mb-6">SERVIZI</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-8 drop-shadow-sm">
              Servizi immobiliari avanzati
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl drop-shadow-sm">
              Integriamo competenze specialistiche, tecnologia digitale e una rete di partner qualificati, garantendo un approccio strutturato e orientato al valore.
            </p>
          </div>
        </PageHero>

        {/* Services Grid */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div 
                  key={i} 
                  className="group p-10 bg-card border border-border rounded-xl shadow-sm hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-display text-primary text-sm font-medium tracking-[0.3em] mb-4">IL NOSTRO APPROCCIO</p>
                <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
                  Un servizio completo, sicuro e chiavi in mano
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Operiamo con partner specializzati per offrire ai nostri clienti un'esperienza immobiliare senza pensieri. Dalla valutazione iniziale alla gestione fiscale, ci occupiamo di ogni aspetto.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Il nostro sistema proprietario basato su Big Data ci permette di fornire valutazioni precise e identificare le migliori opportunità di mercato.
                </p>
                <Link 
                  to="/chi-siamo"
                  className="inline-flex items-center gap-3 text-primary font-medium hover:gap-4 transition-all"
                >
                  Scopri chi siamo <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-card border border-border rounded-xl shadow-sm p-12">
                <div className="space-y-8">
                  <div>
                    <p className="font-serif text-5xl font-medium text-primary mb-2">01</p>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">Analisi</h3>
                    <p className="text-muted-foreground">Valutiamo le tue esigenze e obiettivi</p>
                  </div>
                  <div className="border-t border-border pt-8">
                    <p className="font-serif text-5xl font-medium text-primary mb-2">02</p>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">Strategia</h3>
                    <p className="text-muted-foreground">Definiamo il percorso ottimale</p>
                  </div>
                  <div className="border-t border-border pt-8">
                    <p className="font-serif text-5xl font-medium text-primary mb-2">03</p>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">Esecuzione</h3>
                    <p className="text-muted-foreground">Realizziamo insieme i tuoi obiettivi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Hai bisogno di una consulenza?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contattaci per scoprire come possiamo aiutarti con i nostri servizi immobiliari.
            </p>
            <Link 
              to="/contatti"
              className="inline-block px-10 py-4 rounded-lg bg-primary text-primary-foreground font-medium tracking-wider hover:bg-primary/90 transition-colors shadow-sm"
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
