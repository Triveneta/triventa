import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const PRIVACY_CONSENT_KEY = "casa-quote-privacy-consent";

const privacyTermsHtml = `
<p class="text-base font-semibold">Termini e Condizioni - Privacy e Trattamento dei Dati Personali</p>
<p class="mb-3">Utilizzando questo servizio, l'utente dichiara di aver letto e accettato i presenti termini e condizioni relativi al trattamento dei dati personali, redatti in conformita al Regolamento (UE) 2016/679 (GDPR) e alla normativa italiana vigente in materia di protezione dei dati personali.</p>

<p class="mt-4 text-base font-semibold">1. Titolare del Trattamento</p>
<p>Il titolare del trattamento e la societa che fornisce il servizio immobiliare (di seguito, il "Titolare"), operante in Italia nel settore della vendita, valutazione e consulenza immobiliare, nonche nella collaborazione con soggetti terzi del settore real estate.</p>

<p class="mt-3 text-base font-semibold">2. Tipologia di Dati Trattati</p>
<p>Il Titolare puo trattare le seguenti categorie di dati personali:</p>
<ul class="list-disc list-inside ml-2 mt-2 space-y-1">
  <li>dati identificativi e di contatto (es. nome, cognome, email, telefono);</li>
  <li>dati relativi agli immobili (indirizzo, caratteristiche, documentazione tecnica, foto);</li>
  <li>informazioni economiche e valutative fornite volontariamente dall'utente;</li>
  <li>ogni ulteriore informazione necessaria all'erogazione dei servizi richiesti.</li>
</ul>

<p class="mt-3 text-base font-semibold">3. Finalita del Trattamento</p>
<p>I dati personali sono trattati per le seguenti finalita:</p>
<ul class="list-disc list-inside ml-2 mt-2 space-y-1">
  <li>valutazione immobiliare e stima del valore di mercato;</li>
  <li>intermediazione e vendita di immobili;</li>
  <li>gestione delle richieste di contatto e consulenza;</li>
  <li>condivisione delle informazioni con partner professionali (es. agenti immobiliari, consulenti tecnici, imprese, investitori) al fine di fornire il servizio richiesto;</li>
  <li>adempimenti contrattuali e precontrattuali;</li>
  <li>miglioramento del servizio, analisi statistiche e organizzative.</li>
</ul>

<p class="mt-3 text-base font-semibold">4. Base Giuridica del Trattamento</p>
<p>Il trattamento dei dati si fonda su:</p>
<ul class="list-disc list-inside ml-2 mt-2 space-y-1">
  <li>consenso dell'interessato (art. 6, par. 1, lett. a GDPR);</li>
  <li>esecuzione di misure precontrattuali o contrattuali richieste dall'interessato (art. 6, par. 1, lett. b GDPR);</li>
  <li>adempimento di obblighi legali (art. 6, par. 1, lett. c GDPR);</li>
  <li>legittimo interesse del Titolare, nei limiti consentiti dalla legge (art. 6, par. 1, lett. f GDPR).</li>
</ul>
<p>I dati saranno utilizzati esclusivamente per le finalita sopra indicate, nel rispetto del principio di limitazione delle finalita (art. 5 GDPR).</p>

<p class="mt-3 text-base font-semibold">5. Condivisione dei Dati con Terze Parti</p>
<p>I dati personali possono essere comunicati a:</p>
<ul class="list-disc list-inside ml-2 mt-2 space-y-1">
  <li>agenti e consulenti immobiliari;</li>
  <li>professionisti e societa operanti nel settore immobiliare;</li>
  <li>imprese, investitori o partner commerciali coinvolti nell'operazione richiesta.</li>
</ul>
<p>Tali soggetti agiscono in qualita di responsabili o autonomi titolari del trattamento, sulla base di accordi conformi al GDPR e alla normativa italiana.</p>

<p class="mt-3 text-base font-semibold">6. Minimizzazione e Conservazione dei Dati</p>
<p>Il Titolare tratta esclusivamente i dati strettamente necessari al perseguimento delle finalita indicate. I dati personali saranno conservati per il tempo necessario all'erogazione del servizio e all'adempimento degli obblighi di legge, dopodiche saranno cancellati o anonimizzati.</p>

<p class="mt-3 text-base font-semibold">7. Diritti dell'Interessato</p>
<p>L'utente puo esercitare in qualsiasi momento i diritti previsti dagli articoli 15-22 del GDPR, tra cui:</p>
<ul class="list-disc list-inside ml-2 mt-2 space-y-1">
  <li>accesso ai dati;</li>
  <li>rettifica o aggiornamento;</li>
  <li>cancellazione (diritto all'oblio);</li>
  <li>limitazione o opposizione al trattamento;</li>
  <li>portabilita dei dati.</li>
</ul>
<p>Le richieste possono essere inviate al Titolare del trattamento ai recapiti indicati nella privacy policy.</p>

<p class="mt-3 text-base font-semibold">8. Sicurezza dei Dati</p>
<p>Il Titolare adotta misure tecniche e organizzative adeguate per garantire la sicurezza dei dati personali e prevenire accessi non autorizzati, perdita, distruzione o uso illecito, in conformita al GDPR e alle normative applicabili (inclusa la NIS2, ove pertinente).</p>

<p class="mt-3 text-base font-semibold">9. Trasferimenti Internazionali</p>
<p>Eventuali trasferimenti di dati verso Paesi extra UE avverranno esclusivamente nel rispetto del Capitolo V del GDPR, mediante garanzie adeguate (decisioni di adeguatezza, clausole contrattuali standard o altri strumenti previsti dalla legge).</p>

<p class="mt-3 text-base font-semibold">10. Trattamento dei Dati dei Minori</p>
<p>Il servizio e destinato esclusivamente a utenti maggiorenni. Il Titolare non raccoglie consapevolmente dati personali di minori. Qualora tali dati fossero trattati accidentalmente, verranno cancellati senza ritardo.</p>

<p class="mt-3 text-base font-semibold">11. Aggiornamenti dei Termini</p>
<p>Il Titolare si riserva il diritto di modificare i presenti termini per adeguarli a cambiamenti normativi o organizzativi. Le modifiche rilevanti saranno comunicate agli utenti. L'utilizzo continuato del servizio implica l'accettazione dei termini aggiornati.</p>

<p class="mt-3 text-base font-semibold">12. Contatti e Reclami</p>
<p>Per informazioni, per l'esercizio dei diritti o per reclami, l'utente puo contattare il Titolare del trattamento ai recapiti indicati nella privacy policy. Resta fermo il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali.</p>

<p class="mt-4 font-medium">Spuntando la casella qui sotto e cliccando "Accetta e Continua", confermi di aver letto, compreso e accettato questi termini e condizioni relativi alla privacy e all'utilizzo di questo servizio.</p>
`;

type Props = {
  open: boolean;
  onAccept: () => void;
  onClose?: () => void;
};

export function PrivacyConsentModal({ open, onAccept, onClose }: Props) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!open) return;
    if (typeof window === "undefined") {
      setChecked(false);
      return;
    }
    setChecked(localStorage.getItem(PRIVACY_CONSENT_KEY) === "true");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v && onClose) onClose(); }}>
      <DialogContent className="max-w-2xl max-h-[90vh]" aria-describedby="privacy-terms-desc">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
           Privacy Policy & Terms of Service
           </DialogTitle>
        </DialogHeader>
        <div id="privacy-terms-desc" className="overflow-y-auto max-h-[60vh] text-sm text-slate-700 mb-4 pr-2">
          <div dangerouslySetInnerHTML={{ __html: privacyTermsHtml }} className="space-y-2" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Checkbox
            id="privacy-consent-modal"
            checked={checked}
            onCheckedChange={(v) => setChecked(v === true)}
          />
          <label htmlFor="privacy-consent-modal" className="text-sm select-none cursor-pointer">
            Ho letto e accetto questi termini e condizioni.
          </label>
        </div>
        <DialogFooter>
          <Button disabled={!checked} onClick={onAccept} className="w-full">
            Accetta e Continua
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function usePrivacyConsent() {
  const [hasConsent, setHasConsent] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(PRIVACY_CONSENT_KEY) === "true";
  });

  const acceptConsent = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(PRIVACY_CONSENT_KEY, "true");
      setHasConsent(true);
    }
  };

  return { hasConsent, acceptConsent };
}
