import { Router, Route } from "@solidjs/router";

import MainLayout from "./app/layouts/MainLayout";
import ContentLayout from "./app/layouts/ContentLayout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import World from "./pages/World";
import Stats from "./pages/Stats";

function App() {
  return (
    <Router root={MainLayout}>
      <Route component={ContentLayout}>
        <Route path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/stats" component ={Stats} />
      </Route>
      <Route path="/world" component={World} />
    </Router>
  )
}

export default App
