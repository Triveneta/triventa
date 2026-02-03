import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-8">
                <Crown className="w-12 h-12 text-primary" />
              </div>
              <p className="font-display text-primary text-sm font-medium tracking-[0.3em] mb-6">AREA CLIENTI PREMIUM</p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-8">
                Riservatezza, chiarezza e competenza
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Cosa trovano qui i nostri investitori iscritti? Accesso esclusivo a opportunità selezionate e consulenza personalizzata.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="text-center p-10 bg-background border border-border">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Properties Preview + Login */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Properties Preview */}
              <div>
                <p className="font-display text-primary text-sm font-medium tracking-[0.3em] mb-4">OPPORTUNITÀ DI INVESTIMENTO</p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                  Progetti Immobiliari Selezionati
                </h2>
                <p className="text-muted-foreground mb-8">
                  Pensati per investitori attenti al valore nel tempo. Accedi per scoprire le opportunità esclusive.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {exclusiveProperties.slice(0, 4).map((property) => (
                    <div key={property.id} className="group relative overflow-hidden">
                      <img src={property.image} alt={property.title} className="w-full h-40 object-cover filter blur-sm" />
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                        <Lock className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Login Form */}
              <div className="bg-card border border-border p-10">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-6 text-center">Accesso Area Riservata</h3>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input 
                      id="username" 
                      value={credentials.username}
                      onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password"
                      value={credentials.password}
                      onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full py-6 text-base tracking-wider">
                    ACCEDI
                  </Button>
                </form>
                
                <div className="mt-8 p-6 bg-primary/5 border border-primary/20 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    L'accesso all'area è riservato ai Clienti Premium abbonati.
                  </p>
                  <p className="text-sm text-muted-foreground">
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
