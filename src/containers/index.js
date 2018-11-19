import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Page1 = lazy(() => import('./Page1'));

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default () => (
  <Router>
    <div>
      <Route exact path="/">
        <Link style={{marginRight: '30px'}} to="/">Home</Link>
      </Route>
      <Route path="/page1">
        <Link to="/page1">Page1</Link>
      </Route>
      <Route exact path="/" component={WaitingComponent(Home)} />
      <Route path="/page1" component={WaitingComponent(Page1)} />
    </div>
  </Router>
);
