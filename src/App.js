import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Counter } from "./features/counter/Counter";
import "./App.scss";
import Header from "components/layout/header/Header";
import Detail from "components/pages/detail/Detail";
import Home from "components/pages/home/Home";
import Product from "components/pages/product/Product";
import { useSelector, useDispatch } from "react-redux";
import { UIAuthActions } from "store/UISlices";
import ShowModal from "components/features/showModal/ShowModal";
import ScrollToTop from "components/features/ScrollToTop";
import LoadingSpinner from "components/UI/LoadingSpinner";
import { PageNotFound } from "components/pages/pageNotFound/PageNotFound";

/*lazy import*/
const Checkout = React.lazy(() => import("components/pages/checkout/Checkout"));
const CheckoutDone = React.lazy(() =>
  import("components/pages/checkout/CheckoutDone")
);
const AuthForm = React.lazy(() => import("components/features/auth/AuthForm"));

function App() {
  const authIsShow = useSelector((state) => state.UIAuthReducer.authIsShow);
  const dispatch = useDispatch();

  const toggleShowAuthHangdler = () => {
    dispatch(UIAuthActions.toggleShowAuth());
  };

  const authClasses = [authIsShow ? "opacity1" : "invisible opacity0"];

  return (
    <Router>
      <div className="App">
        <Suspense
          fallback={
            <div className="jccc pt2em">
              <LoadingSpinner />
            </div>
          }
        >
          <ShowModal
            className={authClasses}
            modalLayer="second"
            onClose={toggleShowAuthHangdler}
            ModalContent={<AuthForm onClose={toggleShowAuthHangdler} />}
          />
          <Header />
          <ScrollToTop />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/detail/:productId">
              <Detail />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/checkoutdone">
              <CheckoutDone />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
