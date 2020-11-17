// import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home";
import Application from "./pages/application";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/application" component={() => <Application />} />
        <Route path="/login" component={() => <Login />} />
      </Switch>
    </Router>
  );
}

export default App;
