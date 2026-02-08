import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid';
import { ArrowLeft, Camera, Check, ChevronDown, ChevronUp, Home, Mail, Phone, X } from 'lucide-react';
import Lottie from 'lottie-react';
import accountCreatedRaw from '@/assets/animations/AccountCreated.json';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxEYUIiVQl5x2CvK9dPW-uMThvu8KQVmtkLsJn8hpENv4UorV-dtesLtccgqCO5RT8e/exec';

const defaultContact = { nome: '', cognome: '', telefono: '', email: '' };
const PROPERTY_OPTIONS = ['ATTICO', 'APPARTAMENTO', 'SCHIERA', 'CASA INDIPENDENTE'];

function PropertySelect({ value, onChange }: { value: string; onChange: (nextValue: string) => void }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 pr-10 text-left text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="block truncate">{value}</span>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70" />
      </button>
      {open && (
        <div className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-lg border border-white/20 bg-slate-150 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
          <ul role="listbox" className="max-h-56 overflow-auto py-1 text-sm text-white">
            {PROPERTY_OPTIONS.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full px-3 py-2 text-left hover:bg-white/40 ${option === value ? 'bg-white text-slate-900' : 'text-white/80 bg-black/80 hover:text-white'}`}
                  role="option"
                  aria-selected={option === value}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function CercaCasaInline({ initial = 'search', onClose }: { initial?: 'search' | 'value'; onClose?: () => void }) {
  const { toast } = useToast();
  const [tab] = useState<'search' | 'value'>(initial);
  const [searchStep, setSearchStep] = useState(1);
  const [valueStep, setValueStep] = useState(1);
  const [isSubmittingSearch, setIsSubmittingSearch] = useState(false);
  const [isSubmittingValue, setIsSubmittingValue] = useState(false);
  const [searchSuccess, setSearchSuccess] = useState(false);
  const [valueSuccess, setValueSuccess] = useState(false);

  const [searchForm, setSearchForm] = useState({
    ...defaultContact,
    tipologia: 'APPARTAMENTO',
    stanze: '1',
    bagni: '1',
    mqMin: '60',
    mqMax: '80',
    zona: '',
    boxAuto: 'no',
    postoAuto: 'no',
    giardino: 'no',
    note: '',
    budgetMin: '150000',
    budgetMax: '220000',
    consenso: false,
  });

  const [valueForm, setValueForm] = useState({
    ...defaultContact,
    tipologia: 'APPARTAMENTO',
    stanze: '1',
    bagni: '1',
    mqMin: '60',
    mqMax: '80',
    zona: '',
    boxAuto: 'no',
    postoAuto: 'no',
    giardino: 'no',
    note: '',
    images: [] as File[],
    consenso: false,
  });

  const [sessionId] = useState<string>(() => uuidv4());
  const [imagePreviews, setImagePreviews] = useState<Array<{ file: File; url: string }>>([]);

  const accountCreated = useMemo(() => {
    const cloned = JSON.parse(JSON.stringify(accountCreatedRaw));
    if (cloned?.layers) {
      cloned.layers = cloned.layers.filter(
        (layer: any) => layer.ty !== 5 && layer.nm !== 'Rectangle 495',
      );
    }
    return cloned;
  }, []);

  const yesNoButtonClass = (active: boolean) => (
    `min-w-[56px] px-3 py-2 rounded-full border text-[10px] uppercase tracking-[0.2em] inline-flex items-center justify-center ${active
      ? 'border-white/70 bg-white/20 text-white'
      : 'border-white/30 text-white/70 hover:bg-white/10'}`
  );

  const clampNumber = (value: number, min?: number, max?: number) => {
    if (Number.isNaN(value)) return min ?? 0;
    if (typeof min === 'number' && value < min) return min;
    if (typeof max === 'number' && value > max) return max;
    return value;
  };

  const stepNumber = (current: string, delta: number, min?: number, max?: number, step = 1) => {
    const parsed = Number(current);
    const next = clampNumber((Number.isNaN(parsed) ? (min ?? 0) : parsed) + delta * step, min, max);
    return String(next);
  };

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const base64 = reader.result.split(',')[1];
          resolve(base64);
        } else reject(new Error('FileReader result is not a string'));
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  const sendStepData = async (
    formType: string,
    step: number,
    data: Record<string, any>,
    options: { showToast?: boolean } = {},
  ) => {
    const { showToast = true } = options;
    const now = new Date();
    const pad = (n: number) => (n < 10 ? '0' + n : n);
    const date = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    const payload: any = { formType, sessionId, date, step };
    Object.assign(payload, data);

    for (const k of Object.keys(payload)) {
      const v = payload[k];
      if (v instanceof File) payload[k] = JSON.stringify({ name: v.name, type: v.type, content: await fileToBase64(v) });
      else if (Array.isArray(v) && v.length > 0 && v[0] instanceof File) {
        const arr: any[] = [];
        for (let i = 0; i < v.length; i++) {
          const f: File = v[i];
          arr.push({ name: f.name, type: f.type, content: await fileToBase64(f) });
        }
        payload[k] = JSON.stringify(arr);
      }
    }

    const params = Object.keys(payload).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(payload[k])}`).join('&');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', SCRIPT_URL);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          toast({ title: 'Errore invio', description: 'Impossibile salvare i dati.', variant: 'destructive' });
        }
      }
    };
    xhr.send(params);
  };

  useEffect(() => () => { imagePreviews.forEach((p) => URL.revokeObjectURL(p.url)); }, [imagePreviews]);

  const handleFilesSelected = (files: FileList | null) => {
    if (!files) return;
    const arr = Array.from(files);
    const newPreviews = arr.map((f) => ({ file: f, url: URL.createObjectURL(f) }));
    setImagePreviews((prev) => [...prev, ...newPreviews]);
    setValueForm((s) => ({ ...s, images: [...s.images, ...arr] }));
  };

  const removeImageAt = (index: number) => {
    setImagePreviews((prev) => {
      const toRevoke = prev[index]; if (toRevoke) URL.revokeObjectURL(toRevoke.url);
      return prev.slice(0, index).concat(prev.slice(index + 1));
    });
    setValueForm((s) => ({ ...s, images: s.images.slice(0, index).concat(s.images.slice(index + 1)) }));
  };

  const handleSearchNext = async () => {
    const {
      tipologia,
      stanze,
      bagni,
      zona,
      boxAuto,
      postoAuto,
      giardino,
      note,
      budgetMin,
      budgetMax,
      mqMin,
      mqMax,
    } = searchForm;
    await sendStepData('cerca_casa', 1, {
      tipologia,
      stanze,
      bagni,
      zona,
      boxAuto,
      postoAuto,
      giardino,
      note,
      budget: `${budgetMin} - ${budgetMax}`,
      mq: `${mqMin} - ${mqMax}`,
    }, { showToast: false });
    setSearchStep(2);
  };

  const handleSearchPrev = () => setSearchStep(1);

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingSearch(true);
    await sendStepData('cerca_casa', 2, {
      nome: searchForm.nome,
      cognome: searchForm.cognome,
      telefono: searchForm.telefono,
      email: searchForm.email,
      consenso: searchForm.consenso ? 'si' : 'no',
    });
    setIsSubmittingSearch(false);
    setSearchSuccess(true);
  };

  const handleValueNext = async () => {
    if (valueStep === 1) {
      const {
        tipologia,
        stanze,
        bagni,
        zona,
        boxAuto,
        postoAuto,
        giardino,
        mqMin,
        mqMax,
      } = valueForm;
      await sendStepData('valuta_immobile', 1, {
        tipologia,
        stanze,
        bagni,
        zona,
        boxAuto,
        postoAuto,
        giardino,
        mq: `${mqMin} - ${mqMax}`,
      }, { showToast: false });
      setValueStep(2);
      return;
    }

    await sendStepData('valuta_immobile', 2, {
      nome: valueForm.nome,
      cognome: valueForm.cognome,
      telefono: valueForm.telefono,
      email: valueForm.email,
      consenso: valueForm.consenso ? 'si' : 'no',
    }, { showToast: false });
    setValueStep(3);
  };

  const handleValuePrev = () => setValueStep((s) => Math.max(1, s - 1));

  const handleValueSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingValue(true);
    const { mqMin, mqMax, ...rest } = valueForm;
    await sendStepData('valuta_immobile', 3, {
      ...rest,
      mq: `${mqMin} - ${mqMax}`,
    });
    setIsSubmittingValue(false);
    setValueSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/40 px-4 py-6 backdrop-blur-sm sm:absolute sm:inset-auto sm:left-0 sm:right-0 sm:bottom-0 sm:bg-transparent sm:backdrop-blur-none">
      <div className="w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] text-white sm:max-h-none">
        <div className="relative mb-4">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Richiesta</p>
            <h3 className="text-lg font-medium">{tab === 'search' ? 'Cerca Casa' : 'Valuta Casa'}</h3>
          </div>
          <button onClick={() => { if (onClose) onClose(); }} className="absolute right-1 top-0 rounded-full p-1.5 hover:bg-white/10" aria-label="Chiudi">
            <X className="h-5 w-5 text-white/80" strokeWidth={1.25} />
          </button>
        </div>

        {tab === 'search' && searchSuccess && (
          <div className="py-8 text-center">
            <div className="mx-auto w-64">
              <Lottie animationData={accountCreated} loop={false} />
            </div>
            <h4 className="text-lg font-medium">Richiesta inviata</h4>
            <p className="text-sm text-white/70">Richiesta inviata con successo. Ti contatteremo presto.</p>
          </div>
        )}

        {tab === 'search' && !searchSuccess && (
          <form onSubmit={handleSearchSubmit} className="space-y-3">
            {searchStep === 2 && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input placeholder="Nome" value={searchForm.nome} onChange={(e) => setSearchForm((s) => ({ ...s, nome: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                  <input placeholder="Cognome" value={searchForm.cognome} onChange={(e) => setSearchForm((s) => ({ ...s, cognome: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input placeholder="Telefono" value={searchForm.telefono} onChange={(e) => setSearchForm((s) => ({ ...s, telefono: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                  <input placeholder="Email" value={searchForm.email} onChange={(e) => setSearchForm((s) => ({ ...s, email: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                </div>
                <label className="ml-1 flex items-center gap-3 text-xs text-white/70">
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <input
                      type="checkbox"
                      checked={searchForm.consenso}
                      onChange={(e) => setSearchForm((s) => ({ ...s, consenso: e.target.checked }))}
                      className="peer sr-only"
                    />
                    <span className={`flex h-5 w-5 items-center justify-center rounded border transition ${searchForm.consenso ? 'border-white bg-white/10' : 'border-white/60 bg-transparent'}`}>
                      <Check className={`h-3.5 w-3.5 text-white transition ${searchForm.consenso ? 'opacity-100' : 'opacity-0'}`} />
                    </span>
                  </span>
                  <span>
                    Acconsento alla condivisione dei miei dati con l&apos;azienda per ricevere offerte e per essere contattato tramite i recapiti forniti sopra.
                  </span>
                </label>
                {isSubmittingSearch ? (
                  <div className="flex flex-col items-center gap-3 py-4">
                    <div className="h-10 w-10 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">Invio in corso...</p>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <button type="button" onClick={handleSearchPrev} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs uppercase tracking-[0.2em] hover:bg-white/10">
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Indietro
                    </button>
                    <button
                      type="submit"
                      disabled={!searchForm.consenso}
                      className="w-52 px-4 py-2 rounded-full border border-white/60 bg-white/20 text-white text-xs uppercase tracking-[0.25em] hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Invia
                    </button>
                  </div>
                )}
              </div>
            )}

            {searchStep === 1 && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-white/70 mb-1">
                      <Home className="h-3.5 w-3.5" />
                      <span>Tipo di immobile</span>
                    </div>
                    <PropertySelect value={searchForm.tipologia} onChange={(value) => setSearchForm((s) => ({ ...s, tipologia: value }))} />
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Zona inserisci</label>
                    <input value={searchForm.zona} onChange={(e) => setSearchForm((s) => ({ ...s, zona: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 mt-1 text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-white/70">Budget</label>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="relative flex-1">
                        <input
                          type="number"
                          min={0}
                          max={1000000}
                          step={10}
                          inputMode="numeric"
                          value={searchForm.budgetMin}
                          onChange={(e) => setSearchForm((s) => ({ ...s, budgetMin: e.target.value }))}
                          className="number-field w-full rounded-lg border border-white/20 bg-white/5 p-2.5 pr-10 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                        />
                        <div className="absolute right-1 inset-y-0 flex flex-col items-center justify-center gap-0.5">
                          <button
                            type="button"
                            onClick={() => setSearchForm((s) => ({ ...s, budgetMin: stepNumber(s.budgetMin, 1, 0, 1000000, 10) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Aumenta budget minimo"
                          >
                            <ChevronUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setSearchForm((s) => ({ ...s, budgetMin: stepNumber(s.budgetMin, -1, 0, 1000000, 10) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Diminuisci budget minimo"
                          >
                            <ChevronDown className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                      <span className="text-white/60">-</span>
                      <div className="relative flex-1">
                        <input
                          type="number"
                          min={0}
                          max={1000000}
                          step={10}
                          inputMode="numeric"
                          value={searchForm.budgetMax}
                          onChange={(e) => setSearchForm((s) => ({ ...s, budgetMax: e.target.value }))}
                          className="number-field w-full rounded-lg border border-white/20 bg-white/5 p-2.5 pr-10 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                        />
                        <div className="absolute right-1 inset-y-0 flex flex-col items-center justify-center gap-0.5">
                          <button
                            type="button"
                            onClick={() => setSearchForm((s) => ({ ...s, budgetMax: stepNumber(s.budgetMax, 1, 0, 1000000, 10) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Aumenta budget massimo"
                          >
                            <ChevronUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setSearchForm((s) => ({ ...s, budgetMax: stepNumber(s.budgetMax, -1, 0, 1000000, 10) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Diminuisci budget massimo"
                          >
                            <ChevronDown className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Mq</label>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="relative flex-1">
                        <input
                          type="number"
                          min={20}
                          max={500}
                          step={5}
                          inputMode="numeric"
                          value={searchForm.mqMin}
                          onChange={(e) => setSearchForm((s) => ({ ...s, mqMin: e.target.value }))}
                          className="number-field w-full rounded-lg border border-white/20 bg-white/5 p-2.5 pr-10 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                        />
                        <div className="absolute right-1 inset-y-0 flex flex-col items-center justify-center gap-0.5">
                          <button
                            type="button"
                            onClick={() => setSearchForm((s) => ({ ...s, mqMin: stepNumber(s.mqMin, 1, 20, 500, 5) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Aumenta metri quadri minimi"
                          >
                            <ChevronUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setSearchForm((s) => ({ ...s, mqMin: stepNumber(s.mqMin, -1, 20, 500, 5) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Diminuisci metri quadri minimi"
                          >
                            <ChevronDown className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                      <span className="text-white/60">-</span>
                      <div className="relative flex-1">
                        <input
                          type="number"
                          min={20}
                          max={500}
                          step={5}
                          inputMode="numeric"
                          value={searchForm.mqMax}
                          onChange={(e) => setSearchForm((s) => ({ ...s, mqMax: e.target.value }))}
                          className="number-field w-full rounded-lg border border-white/20 bg-white/5 p-2.5 pr-10 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                        />
                        <div className="absolute right-1 inset-y-0 flex flex-col items-center justify-center gap-0.5">
                          <button
                            type="button"
                            onClick={() => setSearchForm((s) => ({ ...s, mqMax: stepNumber(s.mqMax, 1, 20, 500, 5) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Aumenta metri quadri massimi"
                          >
                            <ChevronUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setSearchForm((s) => ({ ...s, mqMax: stepNumber(s.mqMax, -1, 20, 500, 5) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Diminuisci metri quadri massimi"
                          >
                            <ChevronDown className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  <div>
                    <label className="text-xs text-white/70">Numero stanze</label>
                    <div className="relative">
                      <input
                        type="number"
                        min={1}
                        max={10}
                        inputMode="numeric"
                        value={searchForm.stanze}
                        onChange={(e) => setSearchForm((s) => ({ ...s, stanze: e.target.value }))}
                        className="number-field w-full rounded-lg border border-white/20 bg-white/5 p-2.5 pr-10 mt-1 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                      />
                      <div className="absolute right-1 inset-y-0 flex flex-col items-center justify-center gap-0.5">
                        <button
                          type="button"
                          onClick={() => setSearchForm((s) => ({ ...s, stanze: stepNumber(s.stanze, 1, 1, 10) }))}
                          className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                          aria-label="Aumenta stanze"
                        >
                          <ChevronUp className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setSearchForm((s) => ({ ...s, stanze: stepNumber(s.stanze, -1, 1, 10) }))}
                          className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                          aria-label="Diminuisci stanze"
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Giardino</label>
                    <div className="flex gap-2 mt-1">
                      <button type="button" onClick={() => setSearchForm((s) => ({ ...s, giardino: 'si' }))} className={yesNoButtonClass(searchForm.giardino === 'si')}>Si</button>
                      <button type="button" onClick={() => setSearchForm((s) => ({ ...s, giardino: 'no' }))} className={yesNoButtonClass(searchForm.giardino === 'no')}>No</button>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Bagni</label>
                    <div className="relative">
                      <input
                        type="number"
                        min={1}
                        max={6}
                        inputMode="numeric"
                        value={searchForm.bagni}
                        onChange={(e) => setSearchForm((s) => ({ ...s, bagni: e.target.value }))}
                        className="number-field w-full rounded-lg border border-white/20 bg-white/5 p-2.5 pr-10 mt-1 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                      />
                      <div className="absolute right-1 inset-y-0 flex flex-col items-center justify-center gap-0.5">
                        <button
                          type="button"
                          onClick={() => setSearchForm((s) => ({ ...s, bagni: stepNumber(s.bagni, 1, 1, 6) }))}
                          className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                          aria-label="Aumenta bagni"
                        >
                          <ChevronUp className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setSearchForm((s) => ({ ...s, bagni: stepNumber(s.bagni, -1, 1, 6) }))}
                          className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                          aria-label="Diminuisci bagni"
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Box auto</label>
                    <div className="flex gap-2 mt-1">
                      <button type="button" onClick={() => setSearchForm((s) => ({ ...s, boxAuto: 'si' }))} className={yesNoButtonClass(searchForm.boxAuto === 'si')}>Si</button>
                      <button type="button" onClick={() => setSearchForm((s) => ({ ...s, boxAuto: 'no' }))} className={yesNoButtonClass(searchForm.boxAuto === 'no')}>No</button>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Posto auto</label>
                    <div className="flex gap-2 mt-1">
                      <button type="button" onClick={() => setSearchForm((s) => ({ ...s, postoAuto: 'si' }))} className={yesNoButtonClass(searchForm.postoAuto === 'si')}>Si</button>
                      <button type="button" onClick={() => setSearchForm((s) => ({ ...s, postoAuto: 'no' }))} className={yesNoButtonClass(searchForm.postoAuto === 'no')}>No</button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/70">Note particolari</label>
                  <textarea value={searchForm.note} onChange={(e) => setSearchForm((s) => ({ ...s, note: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 mt-1 min-h-[90px] text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                </div>

                <div className="flex justify-center">
                  <button type="button" onClick={handleSearchNext} className="w-64 px-14 py-2 rounded-full border border-white/60 bg-white/20 text-white text-xs uppercase tracking-[0.25em] hover:bg-white/25">Avanti</button>
                </div>
              </div>
            )}
          </form>
        )}

        {tab === 'value' && valueSuccess && (
          <div className="py-8 text-center">
            <div className="mx-auto w-64">
              <Lottie animationData={accountCreated} loop={false} />
            </div>
            <h4 className="text-lg font-medium">Richiesta inviata</h4>
            <p className="text-sm text-white/70">Richiesta inviata con successo. Ti contatteremo presto.</p>
          </div>
        )}

        {tab === 'value' && !valueSuccess && (
          <form onSubmit={handleValueSubmit} className="space-y-3">
            {valueStep === 2 && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input placeholder="Nome" value={valueForm.nome} onChange={(e) => setValueForm((s) => ({ ...s, nome: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                  <input placeholder="Cognome" value={valueForm.cognome} onChange={(e) => setValueForm((s) => ({ ...s, cognome: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input placeholder="Telefono" value={valueForm.telefono} onChange={(e) => setValueForm((s) => ({ ...s, telefono: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                  <input placeholder="Email" value={valueForm.email} onChange={(e) => setValueForm((s) => ({ ...s, email: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                </div>
                <label className="ml-1 flex items-center gap-3 text-xs text-white/70">
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <input
                      type="checkbox"
                      checked={valueForm.consenso}
                      onChange={(e) => setValueForm((s) => ({ ...s, consenso: e.target.checked }))}
                      className="peer sr-only"
                    />
                    <span className={`flex h-5 w-5 items-center justify-center rounded border transition ${valueForm.consenso ? 'border-white bg-white/10' : 'border-white/60 bg-transparent'}`}>
                      <Check className={`h-3.5 w-3.5 text-white transition ${valueForm.consenso ? 'opacity-100' : 'opacity-0'}`} />
                    </span>
                  </span>
                  <span>
                    Acconsento alla condivisione dei miei dati con l&apos;azienda per ricevere offerte e per essere contattato tramite i recapiti forniti sopra.
                  </span>
                </label>
                <div className="flex justify-between">
                  <button type="button" onClick={handleValuePrev} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs uppercase tracking-[0.2em] hover:bg-white/10">
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Indietro
                  </button>
                  <button type="button" onClick={handleValueNext} className="w-64 px-14 py-2 rounded-full border border-white/60 bg-white/20 text-white text-xs uppercase tracking-[0.25em] hover:bg-white/25">Avanti</button>
                </div>
              </div>
            )}

            {valueStep === 1 && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-white/70 mb-1">
                      <Home className="h-3.5 w-3.5" />
                      <span>Tipo di immobile</span>
                    </div>
                    <PropertySelect value={valueForm.tipologia} onChange={(value) => setValueForm((s) => ({ ...s, tipologia: value }))} />
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Zona inserisci</label>
                    <input value={valueForm.zona} onChange={(e) => setValueForm((s) => ({ ...s, zona: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 mt-1 text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-white/70">Mq</label>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="relative flex-1">
                        <input
                          type="number"
                          min={20}
                          max={500}
                          step={5}
                          inputMode="numeric"
                          value={valueForm.mqMin}
                          onChange={(e) => setValueForm((s) => ({ ...s, mqMin: e.target.value }))}
                          className="number-field w-full rounded-lg border border-white/20 bg-white/5 p-2.5 pr-10 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                        />
                        <div className="absolute right-1 inset-y-0 flex flex-col items-center justify-center gap-0.5">
                          <button
                            type="button"
                            onClick={() => setValueForm((s) => ({ ...s, mqMin: stepNumber(s.mqMin, 1, 20, 500, 5) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Aumenta metri quadri minimi"
                          >
                            <ChevronUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setValueForm((s) => ({ ...s, mqMin: stepNumber(s.mqMin, -1, 20, 500, 5) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Diminuisci metri quadri minimi"
                          >
                            <ChevronDown className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                      <span className="text-white/60">-</span>
                      <div className="relative flex-1">
                        <input
                          type="number"
                          min={20}
                          max={500}
                          step={5}
                          inputMode="numeric"
                          value={valueForm.mqMax}
                          onChange={(e) => setValueForm((s) => ({ ...s, mqMax: e.target.value }))}
                          className="number-field w-full rounded-lg border border-white/20 bg-white/5 p-2.5 pr-10 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                        />
                        <div className="absolute right-1 inset-y-0 flex flex-col items-center justify-center gap-0.5">
                          <button
                            type="button"
                            onClick={() => setValueForm((s) => ({ ...s, mqMax: stepNumber(s.mqMax, 1, 20, 500, 5) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Aumenta metri quadri massimi"
                          >
                            <ChevronUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setValueForm((s) => ({ ...s, mqMax: stepNumber(s.mqMax, -1, 20, 500, 5) }))}
                            className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                            aria-label="Diminuisci metri quadri massimi"
                          >
                            <ChevronDown className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Foto immobile (opzionale)</label>
                    <div className="mt-1">
                      <input id="inline-images" type="file" accept="image/*" multiple onChange={(e) => handleFilesSelected(e.target.files)} className="hidden" />
                      <label htmlFor="inline-images" className="inline-flex items-center gap-2 cursor-pointer rounded-lg border-2 border-dashed border-white/30 p-2 text-sm hover:bg-white/5">
                        <Camera className="h-4 w-4 text-white/60" />
                        <span className="text-xs text-white/70">Allega foto (opzionale)</span>
                      </label>
                      {imagePreviews.length > 0 && (
                        <div className="flex gap-2 mt-2 overflow-auto">
                          {imagePreviews.map((p, i) => (
                            <div key={p.url} className="relative w-20 h-14 border border-white/20 rounded overflow-hidden">
                              <img src={p.url} className="w-full h-full object-cover" alt="" />
                              <button type="button" onClick={() => removeImageAt(i)} className="absolute top-0 right-0 bg-black/50 text-white text-xs px-1">x</button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  <div>
                    <label className="text-xs text-white/70">Numero stanze</label>
                    <div className="relative">
                      <input
                        type="number"
                        min={1}
                        max={10}
                        inputMode="numeric"
                        value={valueForm.stanze}
                        onChange={(e) => setValueForm((s) => ({ ...s, stanze: e.target.value }))}
                        className="number-field w-full rounded-lg border border-white/20 bg-white/5 p-2.5 pr-10 mt-1 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                      />
                      <div className="absolute right-1 inset-y-0 flex flex-col items-center justify-center gap-0.5">
                        <button
                          type="button"
                          onClick={() => setValueForm((s) => ({ ...s, stanze: stepNumber(s.stanze, 1, 1, 10) }))}
                          className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                          aria-label="Aumenta stanze"
                        >
                          <ChevronUp className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setValueForm((s) => ({ ...s, stanze: stepNumber(s.stanze, -1, 1, 10) }))}
                          className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                          aria-label="Diminuisci stanze"
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Giardino</label>
                    <div className="flex gap-2 mt-1">
                      <button type="button" onClick={() => setValueForm((s) => ({ ...s, giardino: 'si' }))} className={yesNoButtonClass(valueForm.giardino === 'si')}>Si</button>
                      <button type="button" onClick={() => setValueForm((s) => ({ ...s, giardino: 'no' }))} className={yesNoButtonClass(valueForm.giardino === 'no')}>No</button>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Bagni</label>
                    <div className="relative">
                      <input
                        type="number"
                        min={1}
                        max={6}
                        inputMode="numeric"
                        value={valueForm.bagni}
                        onChange={(e) => setValueForm((s) => ({ ...s, bagni: e.target.value }))}
                        className="number-field w-full rounded-lg border border-white/20 bg-white/5 p-2.5 pr-10 mt-1 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                      />
                      <div className="absolute right-1 inset-y-0 flex flex-col items-center justify-center gap-0.5">
                        <button
                          type="button"
                          onClick={() => setValueForm((s) => ({ ...s, bagni: stepNumber(s.bagni, 1, 1, 6) }))}
                          className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                          aria-label="Aumenta bagni"
                        >
                          <ChevronUp className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setValueForm((s) => ({ ...s, bagni: stepNumber(s.bagni, -1, 1, 6) }))}
                          className="rounded p-0.5 text-white/70 hover:text-white focus-visible:outline-none"
                          aria-label="Diminuisci bagni"
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Box auto</label>
                    <div className="flex gap-2 mt-1">
                      <button type="button" onClick={() => setValueForm((s) => ({ ...s, boxAuto: 'si' }))} className={yesNoButtonClass(valueForm.boxAuto === 'si')}>Si</button>
                      <button type="button" onClick={() => setValueForm((s) => ({ ...s, boxAuto: 'no' }))} className={yesNoButtonClass(valueForm.boxAuto === 'no')}>No</button>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/70">Posto auto</label>
                    <div className="flex gap-2 mt-1">
                      <button type="button" onClick={() => setValueForm((s) => ({ ...s, postoAuto: 'si' }))} className={yesNoButtonClass(valueForm.postoAuto === 'si')}>Si</button>
                      <button type="button" onClick={() => setValueForm((s) => ({ ...s, postoAuto: 'no' }))} className={yesNoButtonClass(valueForm.postoAuto === 'no')}>No</button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button type="button" onClick={handleValueNext} className="w-52 px-8 py-2 rounded-full border border-white/60 bg-white/20 text-white text-xs uppercase tracking-[0.25em] hover:bg-white/25">Avanti</button>
                </div>
              </div>
            )}

            {valueStep === 3 && (
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-white/70">Note particolari</label>
                  <textarea value={valueForm.note} onChange={(e) => setValueForm((s) => ({ ...s, note: e.target.value }))} className="w-full rounded-lg border border-white/20 bg-white/5 p-2.5 mt-1 min-h-[90px] text-sm text-white placeholder-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40" />
                </div>


                {isSubmittingValue ? (
                  <div className="flex flex-col items-center gap-3 py-4">
                    <div className="h-10 w-10 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">Invio in corso...</p>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <button type="button" onClick={handleValuePrev} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs uppercase tracking-[0.2em] hover:bg-white/10">
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Indietro
                    </button>
                    <button
                      type="submit"
                      disabled={!valueForm.consenso}
                      className="px-4 py-2 rounded-full bg-white text-slate-900 text-xs uppercase tracking-[0.2em] hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Richiedi valutazione
                    </button>
                  </div>
                )}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
