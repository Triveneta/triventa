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
          <div className="max-w-4xl">
            <p className="font-display text-amber-200 text-sm font-medium tracking-[0.3em] mb-6">LAVORA CON NOI</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-8 drop-shadow-sm">
              Costruiamo insieme il futuro del real estate
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl drop-shadow-sm">
              Triveneta Immobiliare non è una semplice agenzia immobiliare. Costruiamo competenze, relazioni e percorsi di crescita nel real estate di qualità.
            </p>
          </div>
        </PageHero>

        {/* Philosophy */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Crediamo nelle persone prima degli immobili e lavoriamo in un contesto selettivo, dove competenza, comunicazione e attenzione al dettaglio fanno la differenza.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Chi entra nel nostro team cresce gradualmente su immobili di pregio, investimenti e operazioni complesse, costruendo relazioni solide con clienti e investitori.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-display text-primary text-sm font-medium tracking-[0.3em] mb-4">COSA OFFRIAMO</p>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground">
                I Vantaggi di Lavorare con Noi
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="text-center p-8 bg-card border border-border rounded-xl shadow-sm hover:border-primary/20 transition-colors">
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

        {/* What We Look For + Form */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Requirements */}
              <div>
                <p className="font-display text-primary text-sm font-medium tracking-[0.3em] mb-4">CHI CERCHIAMO</p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
                  Il Profilo Ideale
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Cerchiamo consulenti immobiliari con esperienza o profili junior motivati a un percorso strutturato.
                </p>
                
                <div className="space-y-4 mb-8">
                  {requirements.map((req, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{req}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-muted-foreground">
                  Valutiamo ogni candidatura con attenzione, privilegiando l'attitudine alla consulenza e le capacità relazionali.
                </p>
              </div>

              {/* Application Form */}
              <div className="bg-card border border-border rounded-xl shadow-sm p-10">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-6">Invia la tua Candidatura</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome</Label>
                      <Input 
                        id="nome" 
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cognome">Cognome</Label>
                      <Input 
                        id="cognome" 
                        value={formData.cognome}
                        onChange={(e) => setFormData({...formData, cognome: e.target.value})}
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Telefono</Label>
                    <Input 
                      id="telefono" 
                      type="tel" 
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="esperienza">Anni di esperienza nel settore</Label>
                    <Input 
                      id="esperienza" 
                      placeholder="Es: 3 anni, Nessuna esperienza..."
                      value={formData.esperienza}
                      onChange={(e) => setFormData({...formData, esperienza: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="messaggio">Presentati brevemente</Label>
                    <Textarea 
                      id="messaggio" 
                      rows={4}
                      placeholder="Parlaci di te e delle tue motivazioni..."
                      value={formData.messaggio}
                      onChange={(e) => setFormData({...formData, messaggio: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full py-6 text-base tracking-wider rounded-lg shadow-sm">
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
