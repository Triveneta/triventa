import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="font-serif mb-4 text-5xl md:text-6xl font-medium text-foreground">404</h1>
        <p className="mb-8 text-lg text-muted-foreground">Pagina non trovata</p>
        <a href="/" className="inline-block font-display px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors tracking-wider">
          Torna alla Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
