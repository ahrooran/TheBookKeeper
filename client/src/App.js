import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/books" component={Books} />
          <Route exact path="/search/" component={Search} />
          <Route exact path="/faq" component={FAQ}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
