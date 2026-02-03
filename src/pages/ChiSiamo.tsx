import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
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

const team = [
  {
    name: "Luca Bazzanella",
    role: "Co-Founder",
    title: "Manager",
    desc: "Esperto in consulenza strategica, finanza e M&A",
    photo: "/team/luca-bazzanella.png"
  },
  {
    name: "Francesco Mariotti",
    role: "Co-Founder",
    title: "Ingegnere",
    desc: "Specializzato in operazioni immobiliari e valorizzazione di asset",
    photo: "/team/francesco-mariotti.png"
  },
  {
    name: "Sintija Birgele",
    role: "Team",
    title: "IT Expert and partner of European Management",
    desc: "Competenze digitali, tecnologie per il real estate e partnership European Management",
    photo: "/team/sintija-birgele.png"
  }
];

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <PageHero imageUrl={HERO_IMAGES.chiSiamo}>
          <div className="max-w-4xl">
            <p className="font-display text-amber-200 text-sm font-medium tracking-[0.3em] mb-6">CHI SIAMO</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-8 drop-shadow-sm">
              Un'agenzia immobiliare di nuova generazione
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl drop-shadow-sm">
              Triveneta Immobiliare – Premium Real Estate unisce affiancamento qualificato e tecnologie digitali avanzate.
            </p>
          </div>
        </PageHero>

        {/* Main Description */}
        <section className="py-20 bg-card/30">
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
                {[
                  { icon: Building2, title: "Big Data", desc: "Sistema proprietario per valutazioni precise" },
                  { icon: Users, title: "Network", desc: "Rete di partner qualificati" },
                  { icon: FileCheck, title: "Consulenza", desc: "Affiancamento strategico personalizzato" },
                  { icon: Calculator, title: "Rendimento", desc: "Obiettivi di investimento mirati" },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-card border border-border rounded-xl shadow-sm hover:border-primary/20 transition-colors">
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-display text-primary text-sm font-medium tracking-[0.3em] mb-4">IL NOSTRO TEAM</p>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-6">
                Incontra il Nostro Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professionisti con competenze complementari nel settore immobiliare, finanziario e digitale.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {team.map((member, i) => (
                <div key={i} className="group relative overflow-hidden bg-card border border-border rounded-xl shadow-sm overflow-hidden hover:border-primary/20 transition-colors">
                  <div className="aspect-[3/4] min-h-[320px] md:min-h-[400px] overflow-hidden bg-muted">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="font-display text-primary text-xs tracking-[0.2em] mb-2">{member.role}</p>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">{member.title}</p>
                    <p className="text-muted-foreground text-sm">{member.desc}</p>
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
                <div key={i} className="p-8 bg-card border border-border rounded-xl shadow-sm text-center hover:border-primary/20 transition-colors">
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
                className="px-10 py-4 rounded-lg bg-primary text-primary-foreground font-medium tracking-wider hover:bg-primary/90 transition-colors shadow-sm"
              >
                INVESTI CON NOI
              </Link>
              <Link 
                to="/contatti"
                className="px-10 py-4 rounded-lg border border-primary text-primary font-medium tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
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
