// import logo from "./acnhLogo.png";
// import { Navbar } from "./features/navbar/Navbar";
// import { Home } from "./features/home/Home";
// import { About } from "./features/about/";
// import { Contact } from "./features/contact/Contact";
// import { PageNotFound } from "./features/pageNotFound/PageNotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Counter } from "./features/counter/Counter";
import "./App.scss";
import { Header } from "./views/header/Header";
import { Detail } from "./views/detail/Detail";
import { Home } from "./views/home/Home";
import { Product } from "./views/product/Product";
import { Checkout1 } from "./views/checkout1/Checkout1";
import { Checkout2 } from "./views/checkout2/Checkout2";
import { Checkout3 } from "./views/checkout3/Checkout3";
import { Checkout4 } from "./views/checkout4/Checkout4";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route exact path="/checkout1">
            <Checkout1 />
          </Route>
          <Route exact path="/checkout2">
            <Checkout2 />
          </Route>
          <Route exact path="/checkout3">
            <Checkout3 />
          </Route>
          <Route exact path="/checkout4">
            <Checkout4 />
          </Route>
          {/* <Route path="*">
            <PageNotFound />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
