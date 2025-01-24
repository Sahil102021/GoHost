import "./App.css";
import Navbar from "./componet/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import WebsiteBuild from "./page/WebsiteBuild";
import Home from "./page/Home";
import WebSecurity from "./page/WebSecurity";
import Email from "./page/Email";
import Footer from "./componet/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/WebsiteB">
            <WebsiteBuild />
          </Route>
          <Route path="/WebSecurity">
            <WebSecurity />
          </Route>
          <Route path="/Email">
            <Email />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
