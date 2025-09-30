import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import About from "./pages/About";
import SiteLayout from "@/components/site/SiteLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {(() => {
        const base =
          typeof window !== "undefined" &&
          window.location.pathname.startsWith("/the-folio-corner")
            ? "/the-folio-corner"
            : undefined;
        return (
          <BrowserRouter basename={base}>
            <Routes>
              <Route element={<SiteLayout />}>
                <Route path="/the-folio-corner/" element={<Index />} />
                <Route path="/the-folio-corner/projects" element={<Projects />} />
                <Route path="/the-folio-corner/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        );
      })()}
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
