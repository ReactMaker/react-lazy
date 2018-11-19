import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';

export default () => (
  <Router>
    <div>
      <Route exact path="/">
        <Link style={{marginRight: '30px'}} to="/">Home</Link>
      </Route>
      <Route path="/page1">
        <Link to="/page1">Page1</Link>
      </Route>
      <Route exact path="/" component={Home} />
      <Route path="/page1" component={Page1} />
    </div>
  </Router>
);
