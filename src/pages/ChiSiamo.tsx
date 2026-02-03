import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Building2, FileCheck, Calculator, ArrowRight } from "lucide-react";

const partnerships = [
  {
    name: "European Management Institute",
    desc: "Agevolazioni, strumenti digitali e automazione dei processi"
  },
  {
    name: "UNSIC",
    desc: "Supporto negli adempimenti burocratici e nei passaggi ereditari"
  },
  {
    name: "Studio Decaminada",
    desc: "Consulenza in ambito fiscale e fiscalità internazionale"
  }
];

const founders = [
  {
    name: "Francesco Mariotti",
    role: "Co-Founder",
    title: "Ingegnere",
    desc: "Specializzato in operazioni immobiliari e valorizzazione di asset"
  },
  {
    name: "Luca Bazzanella",
    role: "Co-Founder", 
    title: "Manager",
    desc: "Esperto in consulenza strategica, finanza e M&A"
  }
];

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="font-display text-primary text-sm font-medium tracking-[0.3em] mb-6">CHI SIAMO</p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-8">
                Un'agenzia immobiliare di nuova generazione
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                Triveneta Immobiliare – Premium Real Estate unisce affiancamento qualificato e tecnologie digitali avanzate.
              </p>
            </div>
          </div>
        </section>

        {/* Main Description */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Grazie a un sistema proprietario basato su Big Data forniamo valutazioni rapide, precise e aggiornate, supportiamo la ricerca di immobili anche in location esclusive e affianchiamo investitori partendo da obiettivi di rendimento e pianificazione strategica.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Operiamo con partner specializzati per offrire ai nostri clienti un servizio completo, sicuro e chiavi in mano.
                </p>
                <Link 
                  to="/servizi"
                  className="inline-flex items-center gap-3 text-primary font-medium hover:gap-4 transition-all"
                >
                  Scopri i nostri servizi <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-background border border-border">
                  <Building2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">Big Data</h3>
                  <p className="text-sm text-muted-foreground">Sistema proprietario per valutazioni precise</p>
                </div>
                <div className="p-8 bg-background border border-border">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">Network</h3>
                  <p className="text-sm text-muted-foreground">Rete di partner qualificati</p>
                </div>
                <div className="p-8 bg-background border border-border">
                  <FileCheck className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">Consulenza</h3>
                  <p className="text-sm text-muted-foreground">Affiancamento strategico personalizzato</p>
                </div>
                <div className="p-8 bg-background border border-border">
                  <Calculator className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">Rendimento</h3>
                  <p className="text-sm text-muted-foreground">Obiettivi di investimento mirati</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-display text-primary text-sm font-medium tracking-[0.3em] mb-4">I FONDATORI</p>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-6">
                Incontra il Nostro Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nasce dall'intuizione di due professionisti con competenze complementari nel settore immobiliare e finanziario.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder, i) => (
                <div key={i} className="group relative overflow-hidden bg-card border border-border p-10 hover:border-primary transition-colors">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <span className="font-serif text-3xl text-primary">{founder.name.charAt(0)}</span>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-primary text-xs tracking-[0.2em] mb-2">{founder.role}</p>
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-1">{founder.name}</h3>
                    <p className="text-sm text-primary mb-4">{founder.title}</p>
                    <p className="text-muted-foreground">{founder.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-display text-primary text-sm font-medium tracking-[0.3em] mb-4">COLLABORAZIONI</p>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground">
                Partnership Strategiche
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {partnerships.map((partner, i) => (
                <div key={i} className="p-8 bg-background border border-border text-center">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">{partner.name}</h3>
                  <p className="text-muted-foreground">{partner.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Inizia il tuo percorso con noi
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Scopri come possiamo aiutarti a raggiungere i tuoi obiettivi immobiliari.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/investimenti"
                className="px-10 py-4 bg-primary text-primary-foreground font-medium tracking-wider hover:bg-primary/90 transition-colors"
              >
                INVESTI CON NOI
              </Link>
              <Link 
                to="/contatti"
                className="px-10 py-4 border border-primary text-primary font-medium tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                CONTATTACI
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
