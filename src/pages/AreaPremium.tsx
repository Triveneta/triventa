import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
import { Crown, Lock, MapPin, FileText, Calculator, Eye, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const exclusiveProperties = [
  { id: 1, title: "Villa di Prestigio a Forte dei Marmi", location: "Forte dei Marmi", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { id: 2, title: "Attico Esclusivo in Centro Milano", location: "Milano Centro", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" },
  { id: 3, title: "Residenza di Lusso sulle Colline Fiorentine", location: "Firenze", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { id: 4, title: "Villa Storica sul Lago di Como", location: "Lago di Como", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80" },
];

const benefits = [
  {
    icon: Eye,
    title: "Accesso Riservato",
    desc: "Opportunità off-market e proprietà di pregio non visibili nei canali pubblici"
  },
  {
    icon: Calculator,
    title: "Consulenza Fiscale",
    desc: "Consulenza su misura e continuativa su fiscalità e contributi"
  },
  {
    icon: FileText,
    title: "Report Esclusivi",
    desc: "Documentazione, report e analisi di operazioni compatibili con i tuoi interessi"
  }
];

const AreaPremium = () => {
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Accesso riservato",
      description: "Funzionalità in fase di attivazione. Contattaci per maggiori informazioni.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <PageHero imageUrl={HERO_IMAGES.areaPremium}>
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6 sm:mb-8">
              <Crown className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-200" />
            </div>
            <p className="font-display text-amber-200 text-xs sm:text-sm font-medium tracking-[0.3em] mb-4 sm:mb-6">AREA CLIENTI PREMIUM</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-sm">
              Riservatezza, chiarezza e competenza
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
              Cosa trovano qui i nostri investitori iscritti? Accesso esclusivo a opportunità selezionate e consulenza personalizzata.
            </p>
          </div>
        </PageHero>

        {/* Benefits */}
        <section className="py-12 sm:py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <p className="font-display text-primary text-[10px] sm:text-xs font-medium tracking-[0.3em] mb-3 sm:mb-4 px-4">COSA TROVANO QUI I NOSTRI INVESTITORI ISCRITTI?</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, i) => (
                <div key={i} className="text-center p-6 sm:p-8 md:p-10 bg-card border border-border rounded-xl shadow-sm hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto">
                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2 sm:mb-3">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Properties Preview + Login */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              {/* Properties Preview */}
              <div>
                <p className="font-display text-primary text-xs sm:text-sm font-medium tracking-[0.3em] mb-3 sm:mb-4">OPPORTUNITÀ DI INVESTIMENTO</p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-4 sm:mb-6">
                  Progetti Immobiliari Selezionati
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  Pensati per investitori attenti al valore nel tempo. Accedi per scoprire le opportunità esclusive.
                </p>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {exclusiveProperties.slice(0, 4).map((property) => (
                    <div key={property.id} className="group relative overflow-hidden rounded-lg">
                      <img src={property.image} alt={property.title} className="w-full h-32 sm:h-36 md:h-40 object-cover filter blur-sm" />
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                        <Lock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Login Form */}
              <div className="bg-card border border-border rounded-xl shadow-sm p-6 sm:p-8 md:p-10">
                <h3 className="font-display text-xs sm:text-sm font-medium tracking-[0.2em] text-foreground mb-4 sm:mb-6 text-center">ACCESSO CLIENTI PREMIUM</h3>
                <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-xs sm:text-sm">Username</Label>
                    <Input 
                      id="username" 
                      value={credentials.username}
                      onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                      className="text-sm sm:text-base"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-xs sm:text-sm">Password</Label>
                    <Input 
                      id="password" 
                      type="password"
                      value={credentials.password}
                      onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                      className="text-sm sm:text-base"
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full py-4 sm:py-5 md:py-6 text-sm sm:text-base tracking-wider rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                    ACCEDI
                  </Button>
                </form>
                
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    L'accesso all'area è riservato ai Clienti Premium abbonati.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Se desideri maggiori informazioni o richiedere l'attivazione del servizio,{" "}
                    <Link to="/contatti" className="text-primary hover:underline">contattaci qui</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AreaPremium;
