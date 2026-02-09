import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
import { Users, Building2, FileCheck, Calculator, ArrowRight } from "lucide-react";
// Removed partnerships array

const baseUrl = import.meta.env.BASE_URL;

const team = [

  {
    name: "Francesco Mariotti",
    role: "Co-Founder",
    title: "Co-Founder",
    desc: "Immobiliare e Ingegnere",
    photo: `${baseUrl}team/francesco_portrait.jpg`
  },
  {
    name: "Luca Bazzanella",
    role: "Co-Founder",
    title: "Co-Founder",
    desc: "Consulenza strategica e finanza",
    photo: `${baseUrl}team/luca-bazzanella.png`
  },
  {
    name: "Sintija Birgele",
    role: "Team",
    title: "Ingegnera Informatico",
    desc: "Software e digitale",
    photo: `${baseUrl}team/sintija-birgele.jpg`
  },
  {
    name: "Paolo Decaminada",
    role: "Team",
    title: "Legal",
    desc: "Tax e legal",
    photo: `${baseUrl}team/decaminada_2.jpg`
  },
];

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <PageHero imageUrl={HERO_IMAGES.chiSiamo}>
          <div className="max-w-4xl">
            <p className="font-display text-amber-200 text-xs sm:text-sm font-medium tracking-[0.3em] mb-4 sm:mb-6">CHI SIAMO</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-sm px-4">
              Un'agenzia immobiliare di nuova generazione
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl drop-shadow-sm font-light px-4">
              Triveneta Immobiliare – Premium Real Estate unisce affiancamento qualificato e tecnologie digitali avanzate.
            </p>
          </div>
        </PageHero>

        {/* Main Description */}
        <section className="pt-12 sm:pb-8 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-card/40 rounded-2xl text-justify">
                <div className="space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed font-regular">
                    Triveneta Immobiliare – Premium Real Estate è un’agenzia immobiliare di nuova generazione che unisce competenze consulenziali, digitale e un vasto network relazionale. Questo permette l'accesso a opportunità di acquisto e investimento uniche e l'affiancamento di investitori partendo da obiettivi di rendimento. Nasce dall'intuizione dei due soci fondatori: Francesco Mariotti, ingegnere specializzato in operazioni immobiliari e Luca Bazzanella manager esperto in consulenza strategica, finanza e M&A.
                  </p>

                  <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
                    Operiamo con partner specializzati per offrire ai nostri clienti un servizio completo, sicuro e chiavi in mano.
                  </p>

                  <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
                    Chi entra nel nostro team cresce gradualmente su immobili di pregio, investimenti e operazioni complesse, costruendo relazioni solide con clienti e investitori. Cerchiamo consulenti immobiliari con esperienza o profili junior motivati a un percorso strutturato.
                  </p>

                  <div>
                    <Link
                      to="/servizi"
                      className="inline-flex items-center gap-2 sm:gap-3 text-primary font-medium hover:gap-4 transition-all text-sm sm:text-base"
                    >
                      Scopri i nostri servizi <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-16 md:py-0">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <p className="font-display text-primary text-xs sm:text-sm font-medium tracking-[0.3em] mb-3 sm:mb-4">IL NOSTRO TEAM</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 sm:mb-6">
                Incontra il Nostro Team
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
              {team.map((member, i) => (
                <div key={i} className="group relative overflow-hidden bg-card border border-border rounded-xl shadow-sm overflow-hidden hover:border-primary/20 transition-colors">
                  <div className="aspect-[3/4] min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] overflow-hidden bg-muted">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 text-center">
                    <p className="font-display text-primary text-[10px] sm:text-xs tracking-[0.2em] mb-1 sm:mb-2">{member.role}</p>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-1">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-primary mb-2 sm:mb-3">{member.title}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships section removed */}

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-4 sm:mb-6">
              Inizia il tuo percorso con noi
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
              Scopri come possiamo aiutarti a raggiungere i tuoi obiettivi immobiliari.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to="/investimenti"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg bg-primary text-primary-foreground text-sm sm:text-base font-medium tracking-wider hover:bg-primary/90 transition-colors shadow-sm"
              >
                INVESTI CON NOI
              </Link>
              <Link 
                to="/contatti"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg border border-primary text-primary text-sm sm:text-base font-medium tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
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
