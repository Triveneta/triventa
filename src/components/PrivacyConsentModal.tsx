import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const PRIVACY_CONSENT_KEY = "casa-quote-privacy-consent";

const privacyTermsHtml = `
<p class="mb-3">Utilizzando questo servizio, accetti i seguenti termini e condizioni relativi alla privacy e al trattamento dei dati personali, in conformita con il GDPR e le normative italiane sulla privacy.</p>

<p class="mt-4 text-base font-semibold">1. Consenso al Trattamento dei Dati (GDPR)</p>
<p>Acconsenti esplicitamente al trattamento dei tuoi dati personali (inclusi indirizzo email, informazioni sull'immobile, foto e altre informazioni fornite) per le seguenti finalita:</p>
<ul class="list-disc list-inside ml-2 mt-2 space-y-1">
  <li>Generazione di preventivi e stime di costo</li>
  <li>Condivisione delle tue richieste con imprese edili verificate</li>
  <li>Miglioramento del servizio e analisi statistica</li>
</ul>

<p class="mt-3 text-base font-semibold">2. Base Giuridica e Limitazione delle Finalita (GDPR)</p>
<p>Il trattamento e basato sul tuo consenso ed e strettamente limitato alle finalita descritte. Nessun uso ulteriore avverra senza ulteriore consenso, in conformita all'articolo 5 del GDPR.</p>

<p class="mt-3 text-base font-semibold">3. Condivisione Dati con Terze Parti (GDPR)</p>
<p>I tuoi dati possono essere condivisi con imprese edili verificate che operano in Italia, al solo scopo di permettere loro di contattarti con preventivi. Tutti i partner sono vincolati da accordi di trattamento dati conformi al GDPR.</p>

<p class="mt-3 text-base font-semibold">4. Minimizzazione e Conservazione dei Dati (GDPR)</p>
<p>Raccogliamo e trattiamo solo i dati minimi necessari per fornire il servizio. I dati sono conservati in modo sicuro e mantenuti solo per il tempo necessario, quindi eliminati o anonimizzati in conformita all'articolo 25 del GDPR.</p>

<p class="mt-3 text-base font-semibold">5. Diritti dell'Interessato (GDPR)</p>
<p>Hai il diritto di accedere, rettificare, cancellare, limitare o opporti al trattamento dei tuoi dati personali, e il diritto alla portabilita dei dati, ai sensi degli articoli 15-22 del GDPR. Per esercitare questi diritti, contatta il titolare del trattamento.</p>

<p class="mt-3 text-base font-semibold">6. Sicurezza dei Dati (GDPR, NIS2)</p>
<p>Adottiamo misure tecniche e organizzative per proteggere i tuoi dati contro accessi non autorizzati, perdite o usi impropri. I sistemi sono soggetti a regolari valutazioni dei rischi e controlli di sicurezza informatica.</p>

<p class="mt-3 text-base font-semibold">7. Trasferimenti Internazionali (GDPR)</p>
<p>Eventuali trasferimenti internazionali di dati sono soggetti a garanzie appropriate come richiesto dal Capitolo V del GDPR e altre leggi applicabili.</p>

<p class="mt-3 text-base font-semibold">8. Privacy dei Minori (GDPR)</p>
<p>Questo servizio non e destinato a minori di 13 anni. Se hai meno di 13 anni, non utilizzare questo servizio. Se ritieni che i dati di un minore siano stati trattati, contatta il titolare del trattamento per la rimozione immediata.</p>

<p class="mt-3 text-base font-semibold">9. Aggiornamenti ai Termini</p>
<p>Questi termini possono essere aggiornati per riflettere cambiamenti nella legge o nelle migliori pratiche. Sarai informato di eventuali modifiche sostanziali. L'uso continuato del servizio costituisce accettazione dei termini rivisti.</p>

<p class="mt-3 text-base font-semibold">10. Contatti e Reclami</p>
<p>Per domande, per esercitare i tuoi diritti o per presentare un reclamo, contatta il titolare del trattamento all'indirizzo fornito nella privacy policy. Hai anche il diritto di presentare un reclamo alla tua autorita locale per la protezione dei dati.</p>

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
