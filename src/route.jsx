import { Router, Route, hashHistory } from "react-router";

import { App, Mine } from "containers";

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/Mine" component={Mine} />
  </Router>
);
