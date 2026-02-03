import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
import { TrendingUp, Building, Briefcase, Users, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const clientTypes = [
  { id: "privato", label: "Privato", desc: "Investitore individuale" },
  { id: "imprenditore", label: "Imprenditore", desc: "Titolare d'impresa" },
  { id: "societa", label: "Società / Family office", desc: "Entità strutturata" },
];

const returnOptions = [
  { id: "bassa", label: "Bassa ma stabile (2–4%)", desc: "Priorità alla sicurezza e alla conservazione del capitale" },
  { id: "equilibrata", label: "Equilibrata (4–6%)", desc: "Buon compromesso tra rischio e rendimento" },
  { id: "alta", label: "Alta (6–8% o più)", desc: "Disponibile a valutare operazioni di valorizzazione" },
  { id: "valutare", label: "Da valutare insieme", desc: "Voglio capire cosa è realistico sul mercato" },
];

const budgetOptions = [
  { id: "250k", label: "Fino a 250.000 €" },
  { id: "500k", label: "250.000 – 500.000 €" },
  { id: "1m", label: "500.000 – 1.000.000 €" },
  { id: "over1m", label: "Oltre 1.000.000 €" },
];

const operationTypes = [
  { id: "reddito", label: "Immobile già a reddito" },
  { id: "valorizzazione", label: "Operazione di valorizzazione" },
  { id: "consulenza", label: "Da valutare con consulente" },
];

const assetTypes = [
  { id: "residenziale", label: "Residenziale" },
  { id: "turistico", label: "Turistico / hospitality" },
  { id: "commerciale", label: "Commerciale" },
  { id: "indifferente", label: "Indifferente (conta il rendimento)" },
];

const involvementOptions = [
  { id: "chiavi", label: "Investimento chiavi in mano" },
  { id: "attivo", label: "Coinvolgimento attivo" },
  { id: "strategica", label: "Solo consulenza strategica" },
];

const targetClients = [
  { icon: Users, title: "Investitori Privati", desc: "Interessati a generare una rendita passiva" },
  { icon: Building, title: "Aziende", desc: "Interessate a crescere o diversificare" },
  { icon: Briefcase, title: "Fondi e Family Office", desc: "Interessati a strutture off market ad alto potenziale" },
];

const Investimenti = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    indirizzo: "",
    tipoCliente: "",
    redditivita: "",
    budget: "",
    operazione: "",
    asset: [] as string[],
    coinvolgimento: "",
    note: ""
  });

  const handleAssetChange = (assetId: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, asset: [...formData.asset, assetId] });
    } else {
      setFormData({ ...formData, asset: formData.asset.filter(a => a !== assetId) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Richiesta inviata",
      description: "Ti contatteremo al più presto per discutere le opportunità di investimento.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero imageUrl={HERO_IMAGES.investimenti}>
          <div className="max-w-4xl px-4">
            <p className="font-display text-amber-200 text-xs sm:text-sm font-medium tracking-[0.3em] mb-4 sm:mb-6">INVESTI IN IMMOBILI</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-sm">
              Opportunità immobiliari ad alto potenziale
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl drop-shadow-sm">
              In Triveneta Immobiliare affianchiamo investitori e aziende selezionando opportunità in base ai parametri di rischio e al capitale disponibile.
            </p>
          </div>
        </PageHero>

        {/* Target Clients */}
        <section className="py-12 sm:py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <p className="font-display text-primary text-xs sm:text-sm font-medium tracking-[0.3em] mb-3 sm:mb-4">CHI SONO I NOSTRI CLIENTI</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-foreground">
                Percorsi di Investimento Su Misura
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {targetClients.map((client, i) => (
                <div key={i} className="text-center p-6 sm:p-8 md:p-10 bg-card border border-border rounded-xl shadow-sm hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto">
                    <client.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2 sm:mb-3">{client.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{client.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Form */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <p className="font-display text-primary text-xs sm:text-sm font-medium tracking-[0.3em] mb-3 sm:mb-4">INIZIA ORA</p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-3 sm:mb-4">
                  Richiedi una Consulenza
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Compila il form per ricevere una proposta personalizzata in base ai tuoi obiettivi.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl shadow-sm p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8 md:space-y-10">
                {/* Contact Info */}
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-4 sm:mb-6">Dati di Contatto</h3>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-xs sm:text-sm">Nome Cognome / Nome Azienda</Label>
                      <Input 
                        id="nome" 
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        className="text-sm sm:text-base"
                        required 
                      />
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
                      <Label htmlFor="indirizzo" className="text-xs sm:text-sm">Indirizzo</Label>
                      <Input 
                        id="indirizzo" 
                        value={formData.indirizzo}
                        onChange={(e) => setFormData({...formData, indirizzo: e.target.value})}
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* 1. Client Type */}
                <div className="border-t border-border pt-6 sm:pt-8 md:pt-10">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2">1. Info Generali</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Seleziona una sola opzione</p>
                  <RadioGroup 
                    value={formData.tipoCliente} 
                    onValueChange={(value) => setFormData({...formData, tipoCliente: value})}
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
                  >
                    {clientTypes.map((type) => (
                      <div key={type.id} className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-background border border-border rounded-lg">
                        <RadioGroupItem value={type.id} id={type.id} className="mt-0.5" />
                        <div className="flex-1">
                          <Label htmlFor={type.id} className="text-sm sm:text-base font-medium cursor-pointer block">{type.label}</Label>
                          <p className="text-xs text-muted-foreground mt-1">{type.desc}</p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* 2. Return Expectations */}
                <div className="border-t border-border pt-6 sm:pt-8 md:pt-10">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2">2. Redditività Attesa</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Che rendimento ti aspetti dall'investimento?</p>
                  <RadioGroup 
                    value={formData.redditivita} 
                    onValueChange={(value) => setFormData({...formData, redditivita: value})}
                    className="grid sm:grid-cols-2 gap-3 sm:gap-4"
                  >
                    {returnOptions.map((option) => (
                      <div key={option.id} className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-background border border-border rounded-lg">
                        <RadioGroupItem value={option.id} id={`return-${option.id}`} className="mt-0.5" />
                        <div className="flex-1">
                          <Label htmlFor={`return-${option.id}`} className="text-sm sm:text-base font-medium cursor-pointer block">{option.label}</Label>
                          <p className="text-xs text-muted-foreground mt-1">{option.desc}</p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* 3. Budget */}
                <div className="border-t border-border pt-6 sm:pt-8 md:pt-10">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2">3. Budget Indicativo</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Fascia di investimento</p>
                  <RadioGroup 
                    value={formData.budget} 
                    onValueChange={(value) => setFormData({...formData, budget: value})}
                    className="grid sm:grid-cols-2 gap-3 sm:gap-4"
                  >
                    {budgetOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-background border border-border rounded-lg">
                        <RadioGroupItem value={option.id} id={`budget-${option.id}`} />
                        <Label htmlFor={`budget-${option.id}`} className="text-sm sm:text-base font-medium cursor-pointer">{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* 4. Operation Type */}
                <div className="border-t border-border pt-6 sm:pt-8 md:pt-10">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2">4. Tipo di Operazione Preferita</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Livello di complessità</p>
                  <RadioGroup 
                    value={formData.operazione} 
                    onValueChange={(value) => setFormData({...formData, operazione: value})}
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
                  >
                    {operationTypes.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-background border border-border rounded-lg">
                        <RadioGroupItem value={option.id} id={`op-${option.id}`} />
                        <Label htmlFor={`op-${option.id}`} className="text-sm sm:text-base font-medium cursor-pointer">{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* 5. Asset Types */}
                <div className="border-t border-border pt-6 sm:pt-8 md:pt-10">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2">5. Asset di Interesse</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Puoi selezionare più opzioni</p>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {assetTypes.map((asset) => (
                      <div key={asset.id} className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-background border border-border rounded-lg">
                        <Checkbox 
                          id={`asset-${asset.id}`} 
                          checked={formData.asset.includes(asset.id)}
                          onCheckedChange={(checked) => handleAssetChange(asset.id, checked as boolean)}
                        />
                        <Label htmlFor={`asset-${asset.id}`} className="text-sm sm:text-base font-medium cursor-pointer">{asset.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Involvement */}
                <div className="border-t border-border pt-6 sm:pt-8 md:pt-10">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2">6. Coinvolgimento Desiderato</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Quanto vuoi essere operativo</p>
                  <RadioGroup 
                    value={formData.coinvolgimento} 
                    onValueChange={(value) => setFormData({...formData, coinvolgimento: value})}
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
                  >
                    {involvementOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-background border border-border rounded-lg">
                        <RadioGroupItem value={option.id} id={`inv-${option.id}`} />
                        <Label htmlFor={`inv-${option.id}`} className="text-sm sm:text-base font-medium cursor-pointer">{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* 7. Notes */}
                <div className="border-t border-border pt-6 sm:pt-8 md:pt-10">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-foreground mb-2">7. Nota Libera</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Facoltativa</p>
                  <Textarea 
                    placeholder="Aggiungi eventuali dettagli o richieste specifiche..."
                    value={formData.note}
                    onChange={(e) => setFormData({...formData, note: e.target.value})}
                    rows={4}
                    className="text-sm sm:text-base"
                  />
                </div>

                <Button type="submit" className="w-full py-4 sm:py-5 md:py-6 text-sm sm:text-base tracking-wider rounded-lg shadow-sm">
                  INVIA RICHIESTA
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Investimenti;
