import { Route, Router } from "@solidjs/router";
import ContentLayout from "./app/layouts/ContentLayout";
import MainLayout from "./app/layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import World from "./pages/World";

function App() {
  return (
    <Router root={MainLayout}>
      <Route component={ContentLayout}>
        <Route path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/stats" component={Stats} />
      </Route>
      <Route path="/world" component={World} />
    </Router>
  );
}

export default App;
