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
import { v4 as uuidv4 } from "uuid";

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

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxEYUIiVQl5x2CvK9dPW-uMThvu8KQVmtkLsJn8hpENv4UorV-dtesLtccgqCO5RT8e/exec";

const Contatti = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    oggetto: "",
    messaggio: ""
  });

  const [sessionId] = useState<string>(() => uuidv4());

  const sendContactData = async (data: Record<string, string>) => {
    const now = new Date();
    const pad = (n: number) => (n < 10 ? "0" + n : n);
    const date = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    const payload: Record<string, string | number> = {
      formType: "scrivici_messaggio",
      sessionId,
      date,
      step: 1,
      ...data,
    };

    const params = Object.keys(payload)
      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(payload[k])}`)
      .join("&");

    return new Promise<void>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", SCRIPT_URL);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) resolve();
          else reject(new Error("Errore invio"));
        }
      };
      xhr.send(params);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendContactData({
        nome: formData.nome,
        email: formData.email,
        telefono: formData.telefono,
        oggetto: formData.oggetto,
        messaggio: formData.messaggio,
      });
      setSubmitted(true);
      setFormData({ nome: "", email: "", telefono: "", oggetto: "", messaggio: "" });
    } catch (error) {
      toast({
        title: "Errore invio",
        description: "Impossibile inviare il messaggio. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <PageHero imageUrl={HERO_IMAGES.contatti}>
          <div className="max-w-4xl px-4">
            <p className="font-display text-amber-200 text-xs sm:text-sm font-medium tracking-[0.3em] mb-4 sm:mb-6">CONTATTI</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-sm">
              I Nostri Recapiti
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl drop-shadow-sm font-light">
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
                <div className="mb-8 sm:mb-10 md:mb-12">
                  <div className="bg-card border border-border rounded-xl shadow-sm divide-y divide-transparent overflow-hidden">
                    {contactInfo.map((info, i) => (
                      <div key={i} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6">
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
                </div>

                <div className="p-4 sm:p-6 bg-white border border-primary/20 rounded-lg">
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
                  {submitted && (
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
                      Dettagli inviati con successo. Ti contatteremo presto.
                    </div>
                  )}
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
                  <Button type="submit" disabled={isSubmitting} className="w-full py-4 sm:py-5 md:py-6 text-sm sm:text-base tracking-wider rounded-lg shadow-sm">
                    {isSubmitting ? "INVIO..." : "INVIA MESSAGGIO"}
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
