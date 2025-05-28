import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

// Import the new pages we've created
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Dossier from "./pages/Dossier";
import NetworkMap from "./pages/NetworkMap";
import BookReview1 from "./pages/BookReview1";
import BookReview2 from "./pages/BookReview2";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/dossier" component={Dossier} />
      <Route path="/network-map" component={NetworkMap} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
