# React Lazy

- 將所有程式碼打包成一大包，並且第一次進入畫面時將全部js檔案載入
  - 隨著網站越來越大，載入時間就會變久
- 這是沒有使用Lazy的，啟動起來觀察一下有什麼不同吧

```
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

```

- js files

![](https://i.imgur.com/s9zGX5a.png)

- Home Page Loaded
  - loaded vendors-main.js and main.js

![](https://i.imgur.com/ZE7qOsL.png)

- Page1 Loaded
  - not loaded any js file

![](https://i.imgur.com/TjkGZM8.png)

