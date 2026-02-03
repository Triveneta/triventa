import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
import { Users, Award, TrendingUp, Handshake, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: Award,
    title: "Brand Riconosciuto",
    desc: "Lavora con un marchio di prestigio nel real estate del Triveneto"
  },
  {
    icon: Users,
    title: "Supporto Operativo",
    desc: "Formazione continua e affiancamento nelle trattative"
  },
  {
    icon: Handshake,
    title: "Network Qualificato",
    desc: "Accesso a una rete di partner e clienti di alto profilo"
  },
  {
    icon: TrendingUp,
    title: "Crescita Professionale",
    desc: "Percorso strutturato su immobili di pregio e investimenti"
  }
];

const requirements = [
  "Professionalità e serietà",
  "Attitudine alla consulenza",
  "Capacità relazionali",
  "Voglia di crescere",
  "Esperienza nel settore (o forte motivazione)"
];

const LavoraConNoi = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    esperienza: "",
    messaggio: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Candidatura inviata",
      description: "Ti contatteremo al più presto per un colloquio conoscitivo.",
    });
    setFormData({ nome: "", cognome: "", email: "", telefono: "", esperienza: "", messaggio: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero imageUrl={HERO_IMAGES.lavoraConNoi}>
          <div className="max-w-4xl px-4">
            <p className="font-display text-amber-200 text-xs sm:text-sm font-medium tracking-[0.3em] mb-4 sm:mb-6">LAVORA CON NOI</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-sm">
              Costruiamo insieme il futuro del real estate
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl drop-shadow-sm">
              Triveneta Immobiliare non è una semplice agenzia immobiliare. Costruiamo competenze, relazioni e percorsi di crescita nel real estate di qualità.
            </p>
          </div>
        </PageHero>

        {/* Philosophy */}
        <section className="py-12 sm:py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                Crediamo nelle persone prima degli immobili e lavoriamo in un contesto selettivo, dove competenza, comunicazione e attenzione al dettaglio fanno la differenza.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Chi entra nel nostro team cresce gradualmente su immobili di pregio, investimenti e operazioni complesse, costruendo relazioni solide con clienti e investitori.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <p className="font-display text-primary text-xs sm:text-sm font-medium tracking-[0.3em] mb-3 sm:mb-4">COSA OFFRIAMO</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                I Vantaggi di Lavorare con Noi
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="text-center p-6 sm:p-8 bg-card border border-border rounded-xl shadow-sm hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto">
                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2 sm:mb-3">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Look For + Form */}
        <section className="py-12 sm:py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              {/* Requirements */}
              <div>
                <p className="font-display text-primary text-xs sm:text-sm font-medium tracking-[0.3em] mb-3 sm:mb-4">CHI CERCHIAMO</p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-6 sm:mb-8">
                  Il Profilo Ideale
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                  Cerchiamo consulenti immobiliari con esperienza o profili junior motivati a un percorso strutturato.
                </p>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {requirements.map((req, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">{req}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground">
                  Valutiamo ogni candidatura con attenzione, privilegiando l'attitudine alla consulenza e le capacità relazionali.
                </p>
              </div>

              {/* Application Form */}
              <div className="bg-card border border-border rounded-xl shadow-sm p-6 sm:p-8 md:p-10">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-4 sm:mb-6">Invia la tua Candidatura</h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-xs sm:text-sm">Nome</Label>
                      <Input 
                        id="nome" 
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        className="text-sm sm:text-base"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cognome" className="text-xs sm:text-sm">Cognome</Label>
                      <Input 
                        id="cognome" 
                        value={formData.cognome}
                        onChange={(e) => setFormData({...formData, cognome: e.target.value})}
                        className="text-sm sm:text-base"
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs sm:text-sm">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="text-sm sm:text-base"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-xs sm:text-sm">Telefono</Label>
                    <Input 
                      id="telefono" 
                      type="tel" 
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      className="text-sm sm:text-base"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="esperienza" className="text-xs sm:text-sm">Anni di esperienza nel settore</Label>
                    <Input 
                      id="esperienza" 
                      placeholder="Es: 3 anni, Nessuna esperienza..."
                      value={formData.esperienza}
                      onChange={(e) => setFormData({...formData, esperienza: e.target.value})}
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="messaggio" className="text-xs sm:text-sm">Presentati brevemente</Label>
                    <Textarea 
                      id="messaggio" 
                      rows={4}
                      placeholder="Parlaci di te e delle tue motivazioni..."
                      value={formData.messaggio}
                      onChange={(e) => setFormData({...formData, messaggio: e.target.value})}
                      className="text-sm sm:text-base"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full py-4 sm:py-5 md:py-6 text-sm sm:text-base tracking-wider rounded-lg shadow-sm">
                    INVIA CANDIDATURA
                  </Button>
                </form>
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
