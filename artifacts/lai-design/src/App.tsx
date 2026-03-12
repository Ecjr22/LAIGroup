import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";

// Note: Not setting up Toaster/Tooltips here as we used custom lightweight UI for this specific architectural design
const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback 404 Route */}
      <Route>
        <div className="min-h-screen bg-background flex flex-col items-center justify-center text-foreground font-sans">
          <h1 className="font-display text-8xl text-primary mb-4">404</h1>
          <p className="tracking-widest uppercase mb-8">Page Not Found</p>
          <a href="/" className="border-b border-primary pb-1 hover:text-primary transition-colors uppercase text-sm tracking-widest">
            Return Home
          </a>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
