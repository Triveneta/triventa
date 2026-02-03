import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "direzione@triveneta.eu",
    link: "mailto:direzione@triveneta.eu"
  },
  {
    icon: Mail,
    title: "PEC",
    value: "triveneta@pec.decaminada.it",
    link: "mailto:triveneta@pec.decaminada.it"
  },
  {
    icon: Phone,
    title: "Telefono",
    value: "Ing. Francesco Mariotti: 331 495 4709",
    link: "tel:+393314954709"
  },
  {
    icon: MapPin,
    title: "Area Operativa",
    value: "Triveneto - Veneto, Trentino, Friuli V.G.",
    link: null
  }
];

const Contatti = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    oggetto: "",
    messaggio: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Messaggio inviato",
      description: "Ti risponderemo al più presto.",
    });
    setFormData({ nome: "", email: "", telefono: "", oggetto: "", messaggio: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero imageUrl={HERO_IMAGES.contatti}>
          <div className="max-w-4xl px-4">
            <p className="font-display text-amber-200 text-xs sm:text-sm font-medium tracking-[0.3em] mb-4 sm:mb-6">CONTATTI</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-sm">
              Parliamo del tuo progetto
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl drop-shadow-sm">
              Siamo qui per rispondere alle tue domande e aiutarti a trovare la soluzione perfetta per le tue esigenze immobiliari.
            </p>
          </div>
        </PageHero>

        {/* Contact Info + Form */}
        <section className="py-12 sm:py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              {/* Contact Info */}
              <div>
                <p className="font-display text-primary text-xs sm:text-sm font-medium tracking-[0.3em] mb-3 sm:mb-4">COME CONTATTARCI</p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-6 sm:mb-8">
                  I Nostri Recapiti
                </h2>
                
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 md:mb-12">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-card border border-border rounded-xl shadow-sm">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm sm:text-base text-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 sm:p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <h3 className="font-medium text-sm sm:text-base text-foreground">Orari di Disponibilità</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Lunedì - Venerdì: 9:00 - 18:00<br />
                    Sabato: Su appuntamento
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border rounded-xl shadow-sm p-6 sm:p-8 md:p-10">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-4 sm:mb-6">Scrivici un Messaggio</h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-xs sm:text-sm">Nome e Cognome</Label>
                    <Input 
                      id="nome" 
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="text-sm sm:text-base"
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="oggetto" className="text-xs sm:text-sm">Oggetto</Label>
                    <Input 
                      id="oggetto" 
                      placeholder="Di cosa hai bisogno?"
                      value={formData.oggetto}
                      onChange={(e) => setFormData({...formData, oggetto: e.target.value})}
                      className="text-sm sm:text-base"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="messaggio" className="text-xs sm:text-sm">Messaggio</Label>
                    <Textarea 
                      id="messaggio" 
                      rows={5}
                      placeholder="Descrivi la tua richiesta..."
                      value={formData.messaggio}
                      onChange={(e) => setFormData({...formData, messaggio: e.target.value})}
                      className="text-sm sm:text-base"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full py-4 sm:py-5 md:py-6 text-sm sm:text-base tracking-wider rounded-lg shadow-sm">
                    INVIA MESSAGGIO
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

export default Contatti;
