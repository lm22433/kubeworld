import { Router, Route } from "@solidjs/router";
import MainLayout from "./app/layouts/MainLayout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import World from "./pages/World";
import Stats from "./pages/Stats";

function App() {
  return (
    <Router root={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/world" component={World} />
      <Route path="/stats" component ={Stats} />
    </Router>
  )
}

export default App
