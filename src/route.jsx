import { Router, Route, hashHistory } from "react-router";

import { App, Mine, MyTest } from "containers";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/Mine" component={Mine} />
    <Route path="/Test" component={MyTest} />
  </Router>
);
