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
import { Guess } from "./views/guess/Guess";
import { Footer } from "./views/footer/Footer";
import { Detail } from "./views/detail/Detail";
import { Home } from "./views/home/Home";
import { Product } from "./views/product/Product";

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
          {/* <Route path="*">
            <PageNotFound />
          </Route> */}
        </Switch>
        <Guess />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
