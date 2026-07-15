import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ArticlePTG from "./pages/ArticlePTG";
import ArticleLitigation from "./pages/ArticleLitigation";
import ArticleResilience from "./pages/ArticleResilience";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/insights/growing-through-adversity"} component={ArticlePTG} />
      <Route path={"/insights/litigation-second-injury"} component={ArticleLitigation} />
      <Route path={"/insights/five-pillars-resilience"} component={ArticleResilience} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
