import React from 'react';
import {render} from 'react-dom';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './pages/index';
import About from './pages/about';

render(
  <Router>
    <Switch>
      <Route exact path="/" component={Index} exact />
      <Route exact path="/about" component={About} exact />
    </Switch>
  </Router>,
  document.getElementById('xiaoshubao')
);
