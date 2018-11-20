# React Lazy

- 進入畫面時只載入此頁所需的js檔案，而不是第一次進入畫面時將全部js檔案載入，可以讓頁面載入速度變快
- 使用React Lazy實現動態載入Component，啟動起來觀察一下有什麼不同吧

```
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

```

啟動起來觀察一下有什麼不同吧！

- js files

![](https://i.imgur.com/lSG3kZ5.png)

- Home Page Loaded
  - loaded vendors-main.js, main.js, 2.js

![](https://i.imgur.com/HZmCdqC.png)

- Page1 Page Loaded
  - 0.js, 1.js
  
![](https://i.imgur.com/pD4MvgQ.png)
