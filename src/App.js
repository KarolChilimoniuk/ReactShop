import React from "react";
import "./App.css";
import Home from "./components/HomePage/HomePage";
import Catalog from "./components/Catalog/Catalog";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Menu />
          <Route path="/catalog" component={Catalog} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
