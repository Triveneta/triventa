import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { HERO_IMAGES } from "@/lib/hero-images";
import { useToast } from "@/hooks/use-toast";
import { v4 as uuidv4 } from "uuid";
import { Camera, ChevronDown, Home } from "lucide-react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxEYUIiVQl5x2CvK9dPW-uMThvu8KQVmtkLsJn8hpENv4UorV-dtesLtccgqCO5RT8e/exec";

const defaultContact = { nome: "", cognome: "", telefono: "", email: "" };

export default function CercaCasa() {
  const { toast } = useToast();
  const location = useLocation();
  const [tab, setTab] = useState<"search" | "value">("search");
  const [searchForm, setSearchForm] = useState({
    ...defaultContact,
    tipologia: "APPARTAMENTO",
    stanze: "1",
    bagni: "1",
    mq: "40-60",
    zona: "",
    boxAuto: "no",
    postoAuto: "no",
    giardino: "no",
    note: "",
    budget: "150-220",
  });

  const [valueForm, setValueForm] = useState({
    ...defaultContact,
    tipologia: "APPARTAMENTO",
    stanze: "1",
    bagni: "1",
    mq: "40-60",
    zona: "",
    boxAuto: "no",
    postoAuto: "no",
    giardino: "no",
    note: "",
    images: [] as File[],
  });

  const [sessionId, setSessionId] = useState<string>(() => {
    try {
      const existing = localStorage.getItem("cercaCasa:session");
      if (existing) return existing;
    } catch (_) {}
    return uuidv4();
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const raw = (params.get("form") || params.get("tab") || location.hash.replace("#", "")).toLowerCase();
    if (!raw) return;
    if (raw.includes("value") || raw.includes("valuta")) setTab("value");
    if (raw.includes("search") || raw.includes("cerca")) setTab("search");
  }, [location.search, location.hash]);

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          const base64 = reader.result.split(",")[1];
          resolve(base64);
        } else {
          reject(new Error("FileReader result is not a string"));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  const sendStepData = async (formType: string, step: number, data: Record<string, any>) => {
    // attach session and timestamp
    const now = new Date();
    const pad = (n: number) => (n < 10 ? "0" + n : n);
    const date = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;

    const payload: any = { formType, sessionId, date, step };
    Object.assign(payload, data);

    // stringify files if present (single File or array of Files)
    for (const k of Object.keys(payload)) {
      const v = payload[k];
      if (v instanceof File) {
        payload[k] = JSON.stringify({ name: v.name, type: v.type, content: await fileToBase64(v) });
      } else if (Array.isArray(v) && v.length > 0 && v[0] instanceof File) {
        const arr: any[] = [];
        for (let i = 0; i < v.length; i++) {
          const f: File = v[i];
          arr.push({ name: f.name, type: f.type, content: await fileToBase64(f) });
        }
        payload[k] = JSON.stringify(arr);
      }
    }

    const params = Object.keys(payload)
      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(payload[k])}`)
      .join("&");

    const xhr = new XMLHttpRequest();
    xhr.open("POST", SCRIPT_URL);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          toast({ title: "Invio salvato", description: "I tuoi dati sono stati salvati." });
        } else {
          toast({ title: "Errore invio", description: "Impossibile salvare i dati.", variant: "destructive" });
        }
      }
    };
    xhr.send(params);
  };

  // handlers will call sendStepData with step-specific payloads

  const [searchStep, setSearchStep] = useState<number>(1);
  const [valueStep, setValueStep] = useState<number>(1);
  const [isSubmittingSearch, setIsSubmittingSearch] = useState(false);
  const [isSubmittingValue, setIsSubmittingValue] = useState(false);

  const [imagePreviews, setImagePreviews] = useState<Array<{ file: File; url: string }>>([]);

  const STORAGE_KEY = "cercaCasa:forms";

  // restore saved state (except File objects)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed.searchForm) setSearchForm((s) => ({ ...s, ...parsed.searchForm }));
      if (parsed.valueForm) {
        const safe = { ...parsed.valueForm } as any;
        if (Array.isArray(safe.images) && safe.images.length > 0 && typeof safe.images[0] === "string") {
          safe.images = [];
        }
        setValueForm((s) => ({ ...s, ...safe }));
      }
      if (parsed.searchStep) setSearchStep(parsed.searchStep);
      if (parsed.valueStep) setValueStep(parsed.valueStep);
      if (parsed.sessionId) setSessionId(parsed.sessionId);
    } catch (e) {
      // ignore
    }
  }, []);

  // persist to localStorage (do not store File objects)
  useEffect(() => {
    try {
      const copySearch = { ...searchForm };
      const copyValue = { ...valueForm } as any;
      // avoid storing files — keep filenames only
      if (Array.isArray(copyValue.images)) copyValue.images = copyValue.images.map((f: File) => f.name);
      const payload = {
        sessionId,
        searchForm: copySearch,
        valueForm: copyValue,
        searchStep,
        valueStep,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      localStorage.setItem("cercaCasa:session", sessionId);
    } catch (e) {
      // ignore
    }
  }, [searchForm, valueForm, searchStep, valueStep, sessionId]);

  // cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      imagePreviews.forEach((p) => URL.revokeObjectURL(p.url));
    };
  }, [imagePreviews]);

  const handleFilesSelected = (files: FileList | null) => {
    if (!files) return;
    const arr = Array.from(files);
    const newPreviews = arr.map((f) => ({ file: f, url: URL.createObjectURL(f) }));
    setImagePreviews((prev) => [...prev, ...newPreviews]);
    setValueForm((s) => ({ ...s, images: [...s.images, ...arr] }));
  };

  const removeImageAt = (index: number) => {
    setImagePreviews((prev) => {
      const toRevoke = prev[index];
      if (toRevoke) URL.revokeObjectURL(toRevoke.url);
      const next = prev.slice(0, index).concat(prev.slice(index + 1));
      return next;
    });
    setValueForm((s) => {
      const nextFiles = s.images.slice(0, index).concat(s.images.slice(index + 1));
      return { ...s, images: nextFiles };
    });
  };

  const handleSearchNext = async () => {
    // send contact info as step 1
    await sendStepData("cerca_casa", 1, {
      nome: searchForm.nome,
      cognome: searchForm.cognome,
      telefono: searchForm.telefono,
      email: searchForm.email,
    });
    setSearchStep(2);
  };

  const handleSearchPrev = () => setSearchStep(1);

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingSearch(true);
    await sendStepData("cerca_casa", 2, { ...searchForm });
    setIsSubmittingSearch(false);
  };

  const handleValueNext = async () => {
    // step 1 for valuation: contact
    await sendStepData("valuta_immobile", 1, {
      nome: valueForm.nome,
      cognome: valueForm.cognome,
      telefono: valueForm.telefono,
      email: valueForm.email,
    });
    setValueStep(2);
  };

  const handleValuePrev = () => setValueStep((s) => Math.max(1, s - 1));

  const handleValueSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if not yet on final step, advance
    if (valueStep < 3) {
      setValueStep((s) => s + 1);
      return;
    }
    setIsSubmittingValue(true);
    await sendStepData("valuta_immobile", 3, { ...valueForm });
    setIsSubmittingValue(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero imageUrl={HERO_IMAGES.acquisto}>
        <div className="max-w-4xl px-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-2">Cerca Casa / Valuta il tuo immobile</h1>
          <p className="text-sm text-white/90">Compila il modulo: ti metteremo in contatto con il nostro team.</p>
        </div>
      </PageHero>

      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-3xl mx-auto rounded-2xl border border-border/50 bg-card/70 backdrop-blur-xl p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
          <div className="mb-6 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Richiesta</p>
            <h2 className="text-2xl font-medium">{tab === "search" ? "Cerca Casa" : "Valuta il tuo immobile"}</h2>
          </div>

          {tab === "search" && (
            <form onSubmit={handleSearchSubmit} className="space-y-4">
              {searchStep === 1 && (
                <div>
                  <h3 className="text-lg font-medium">I tuoi dati</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input placeholder="Nome" value={searchForm.nome} onChange={(e) => setSearchForm((s) => ({ ...s, nome: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                    <input placeholder="Cognome" value={searchForm.cognome} onChange={(e) => setSearchForm((s) => ({ ...s, cognome: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <input placeholder="Telefono" value={searchForm.telefono} onChange={(e) => setSearchForm((s) => ({ ...s, telefono: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                    <input placeholder="Email" value={searchForm.email} onChange={(e) => setSearchForm((s) => ({ ...s, email: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                  </div>
                  <div className="flex justify-end mt-4">
                    <button type="button" onClick={handleSearchNext} className="px-4 py-2 rounded-full bg-foreground text-background text-xs uppercase tracking-[0.2em]">Avanti</button>
                  </div>
                </div>
              )}

              {searchStep === 2 && (
                <div>
                  <h3 className="text-lg font-medium">Preferenze ricerca</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="block">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Home className="h-3.5 w-3.5" />
                        <span>Tipo di immobile</span>
                      </div>
                      <div className="relative">
                        <select value={searchForm.tipologia} onChange={(e) => setSearchForm((s) => ({ ...s, tipologia: e.target.value }))} className="w-full appearance-none rounded-lg border border-border/50 bg-background/60 p-2.5 pr-10 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                          <option>ATTICO</option>
                          <option>APPARTAMENTO</option>
                          <option>SCHIERA</option>
                          <option>CASA INDIPENDENTE</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/60" />
                      </div>
                    </label>
                    <label className="block">
                      <div className="text-xs text-muted-foreground">Numero stanze</div>
                      <select value={searchForm.stanze} onChange={(e) => setSearchForm((s) => ({ ...s, stanze: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>PIU DI 4</option>
                      </select>
                    </label>
                    <label className="block">
                      <div className="text-xs text-muted-foreground">Bagni</div>
                      <select value={searchForm.bagni} onChange={(e) => setSearchForm((s) => ({ ...s, bagni: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </label>
                    <label className="block">
                      <div className="text-xs text-muted-foreground">Mq</div>
                      <select value={searchForm.mq} onChange={(e) => setSearchForm((s) => ({ ...s, mq: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option>40-60</option>
                        <option>60-80</option>
                        <option>80-100</option>
                        <option>+100</option>
                      </select>
                    </label>
                  </div>

                  <div className="mt-3">
                    <label className="text-xs text-muted-foreground">Zona (inserisci preferenze)</label>
                    <input value={searchForm.zona} onChange={(e) => setSearchForm((s) => ({ ...s, zona: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 mt-1 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                    <label className="block text-sm">Box auto
                      <select value={searchForm.boxAuto} onChange={(e) => setSearchForm((s) => ({ ...s, boxAuto: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 mt-1 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option value="si">si</option>
                        <option value="no">no</option>
                      </select>
                    </label>
                    <label className="block text-sm">Posto auto
                      <select value={searchForm.postoAuto} onChange={(e) => setSearchForm((s) => ({ ...s, postoAuto: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 mt-1 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option value="si">si</option>
                        <option value="no">no</option>
                      </select>
                    </label>
                    <label className="block text-sm">Giardino
                      <select value={searchForm.giardino} onChange={(e) => setSearchForm((s) => ({ ...s, giardino: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 mt-1 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option value="si">si</option>
                        <option value="no">no</option>
                      </select>
                    </label>
                    <label className="block text-sm">Budget
                      <select value={searchForm.budget} onChange={(e) => setSearchForm((s) => ({ ...s, budget: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 mt-1 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option>150-220</option>
                        <option>220-300</option>
                        <option>300-400</option>
                        <option>400+</option>
                      </select>
                    </label>
                  </div>

                  <div className="mt-3">
                    <label className="text-xs text-muted-foreground">Note particolari</label>
                    <textarea value={searchForm.note} onChange={(e) => setSearchForm((s) => ({ ...s, note: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 mt-1 min-h-[100px] text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                  </div>

                  <div className="flex justify-between mt-4">
                    <button type="button" onClick={handleSearchPrev} className="px-4 py-2 rounded-full border border-border/60 text-xs uppercase tracking-[0.2em]">Indietro</button>
                    <button type="submit" disabled={isSubmittingSearch} className="px-4 py-2 rounded-full bg-foreground text-background text-xs uppercase tracking-[0.2em]">{isSubmittingSearch ? 'Invio...' : 'Invia richiesta'}</button>
                  </div>
                </div>
              )}
            </form>
          )}

          {tab === "value" && (
            <form onSubmit={handleValueSubmit} className="space-y-4">
              {valueStep === 1 && (
                <div>
                  <h3 className="text-lg font-medium">I tuoi dati</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input placeholder="Nome" value={valueForm.nome} onChange={(e) => setValueForm((s) => ({ ...s, nome: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                    <input placeholder="Cognome" value={valueForm.cognome} onChange={(e) => setValueForm((s) => ({ ...s, cognome: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <input placeholder="Telefono" value={valueForm.telefono} onChange={(e) => setValueForm((s) => ({ ...s, telefono: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                    <input placeholder="Email" value={valueForm.email} onChange={(e) => setValueForm((s) => ({ ...s, email: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                  </div>
                  <div className="flex justify-end mt-4">
                    <button type="button" onClick={handleValueNext} className="px-4 py-2 rounded-full bg-foreground text-background text-xs uppercase tracking-[0.2em]">Avanti</button>
                  </div>
                </div>
              )}

              {valueStep === 2 && (
                <div>
                  <h3 className="text-lg font-medium">Dettagli immobile</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="block">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Home className="h-3.5 w-3.5" />
                        <span>Tipo di immobile</span>
                      </div>
                      <div className="relative">
                        <select value={valueForm.tipologia} onChange={(e) => setValueForm((s) => ({ ...s, tipologia: e.target.value }))} className="w-full appearance-none rounded-lg border border-border/50 bg-background/60 p-2.5 pr-10 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                          <option>ATTICO</option>
                          <option>APPARTAMENTO</option>
                          <option>SCHIERA</option>
                          <option>CASA INDIPENDENTE</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/60" />
                      </div>
                    </label>
                    <label className="block">
                      <div className="text-xs text-muted-foreground">Numero stanze</div>
                      <select value={valueForm.stanze} onChange={(e) => setValueForm((s) => ({ ...s, stanze: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>PIU DI 4</option>
                      </select>
                    </label>
                    <label className="block">
                      <div className="text-xs text-muted-foreground">Bagni</div>
                      <select value={valueForm.bagni} onChange={(e) => setValueForm((s) => ({ ...s, bagni: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </label>
                    <label className="block">
                      <div className="text-xs text-muted-foreground">Mq</div>
                      <select value={valueForm.mq} onChange={(e) => setValueForm((s) => ({ ...s, mq: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option>40-60</option>
                        <option>60-80</option>
                        <option>80-100</option>
                        <option>+100</option>
                      </select>
                    </label>
                  </div>

                  <div className="mt-3">
                    <label className="text-xs text-muted-foreground">Zona (inserisci preferenze)</label>
                    <input value={valueForm.zona} onChange={(e) => setValueForm((s) => ({ ...s, zona: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 mt-1 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                    <label className="block text-sm">Box auto
                      <select value={valueForm.boxAuto} onChange={(e) => setValueForm((s) => ({ ...s, boxAuto: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 mt-1 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option value="si">si</option>
                        <option value="no">no</option>
                      </select>
                    </label>
                    <label className="block text-sm">Posto auto
                      <select value={valueForm.postoAuto} onChange={(e) => setValueForm((s) => ({ ...s, postoAuto: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 mt-1 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option value="si">si</option>
                        <option value="no">no</option>
                      </select>
                    </label>
                    <label className="block text-sm">Giardino
                      <select value={valueForm.giardino} onChange={(e) => setValueForm((s) => ({ ...s, giardino: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 mt-1 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40">
                        <option value="si">si</option>
                        <option value="no">no</option>
                      </select>
                    </label>
                    <label className="block text-sm">&nbsp;
                      <div className="text-xs text-muted-foreground">&nbsp;</div>
                    </label>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button type="button" onClick={handleValuePrev} className="px-4 py-2 rounded-full border border-border/60 text-xs uppercase tracking-[0.2em]">Indietro</button>
                    <button type="button" onClick={async () => { await sendStepData("valuta_immobile", 2, { ...valueForm }); setValueStep(3); }} className="px-4 py-2 rounded-full bg-foreground text-background text-xs uppercase tracking-[0.2em]">Avanti</button>
                  </div>
                </div>
              )}

              {valueStep === 3 && (
                <div>
                  <h3 className="text-lg font-medium">Note e conferma</h3>
                  <div>
                    <label className="text-xs text-muted-foreground">Note particolari</label>
                    <textarea value={valueForm.note} onChange={(e) => setValueForm((s) => ({ ...s, note: e.target.value }))} className="w-full rounded-lg border border-border/50 bg-background/60 p-2.5 mt-1 min-h-[120px] text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40" />
                  </div>

                  <div className="mt-4">
                    <label className="text-xs text-muted-foreground">Allega foto dell'immobile (opzionale)</label>
                    <div className="mt-2">
                      <input
                        id="valuta-images"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleFilesSelected(e.target.files)}
                        className="hidden"
                      />

                      <label htmlFor="valuta-images" className="w-full cursor-pointer rounded-lg border-2 border-dashed border-border/60 bg-background/40 p-4 flex items-center gap-3 text-sm hover:bg-background/60">
                        <div className="h-8 w-8 flex items-center justify-center rounded bg-background/70">
                          <Camera className="h-5 w-5 text-foreground/60" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">Trascina le foto qui o clicca per selezionare</div>
                          <div className="text-xs text-muted-foreground">Formato consigliato JPG/PNG — massimo 10 foto.</div>
                        </div>
                      </label>
                    </div>

                    {imagePreviews.length > 0 && (
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-3">
                        {imagePreviews.map((p, i) => (
                          <div key={p.url} className="relative border rounded overflow-hidden">
                            <img src={p.url} alt={p.file.name} className="w-full h-24 object-cover" />
                            <button type="button" onClick={() => removeImageAt(i)} className="absolute top-1 right-1 bg-black/50 text-white rounded px-1 text-xs">Rimuovi</button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between mt-4">
                    <button type="button" onClick={handleValuePrev} className="px-4 py-2 rounded-full border border-border/60 text-xs uppercase tracking-[0.2em]">Indietro</button>
                    <button type="submit" disabled={isSubmittingValue} className="px-4 py-2 rounded-full bg-foreground text-background text-xs uppercase tracking-[0.2em]">{isSubmittingValue ? 'Invio...' : 'Richiedi valutazione'}</button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
