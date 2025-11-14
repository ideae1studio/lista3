import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Candidates from "./pages/Candidates";
import WorkPlan from "./pages/WorkPlan";
import Gallery from "./pages/Gallery";
import Multimedia from "./pages/Multimedia";
import Suggestions from "./pages/Suggestions";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/candidatos"} component={Candidates} />
      <Route path={"/plan-de-trabajo"} component={WorkPlan} />
      <Route path={"/galeria"} component={Gallery} />
      <Route path={"/multimedia"} component={Multimedia} />
      <Route path={"/sugerencias"} component={Suggestions} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
