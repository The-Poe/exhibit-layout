import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Counter } from "./features/counter/Counter";
import "./App.scss";
import Header from "components/layout/header/Header";
import Detail from "components/pages/detail/Detail";
import Home from "components/pages/home/Home";
import Product from "components/pages/product/Product";
// import { useSelector, useDispatch } from "react-redux";
// import { UIAuthActions } from "store/UISlices";
import ShowModal from "components/features/showModal/ShowModal";
import AuthForm from "components/features/auth/AuthForm";
import ScrollToTop from "components/features/ScrollToTop";
import LoadingSpinner from "components/UI/LoadingSpinner";
import { PageNotFound } from "components/pages/pageNotFound/PageNotFound";
import { UIAuthContext } from "context/UIContext";
import { ProductsContextProvider } from "context/productContext";
import { AuthUserContextProvider } from "context/authUserContext";
import { CartContextProvider } from "context/cartContext";
import { OrderInfoContextProvider } from "context/orderInfoContext";

/*lazy import*/
const Checkout = React.lazy(() => import("components/pages/checkout/Checkout"));
const CheckoutDone = React.lazy(() =>
  import("components/pages/checkout/CheckoutDone")
);

function App() {
  // const dispatch = useDispatch();
  // const authIsShow = useSelector((state) => state.UIAuthReducer.authIsShow);
  // const toggleShowAuthHangdler = () => {
  //   dispatch(UIAuthActions.toggleShowAuth());
  // };

  const UIAuthCtx = useContext(UIAuthContext);
  const authIsShow = UIAuthCtx.authIsShow;
  const authClasses = [authIsShow ? "opacity1" : "invisible opacity0"];

  return (
    <Router>
      <div className="App">
        <CartContextProvider>
          <AuthUserContextProvider>
            <ProductsContextProvider>
              <ShowModal
                className={authClasses}
                modalLayer="second"
                onClose={UIAuthCtx.onToggleShowAuth}
                ModalContent={<AuthForm onClose={UIAuthCtx.onToggleShowAuth} />}
              />
              <Header />

              <ScrollToTop />
              <Suspense
                fallback={
                  <div className="jccc pt2em">
                    <LoadingSpinner />
                  </div>
                }
              >
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
                  <OrderInfoContextProvider>
                    <Route exact path="/checkout">
                      <Checkout />
                    </Route>
                    <Route exact path="/checkoutdone">
                      <CheckoutDone />
                    </Route>
                  </OrderInfoContextProvider>
                  <Route path="*">
                    <PageNotFound />
                  </Route>
                </Switch>
              </Suspense>
            </ProductsContextProvider>
          </AuthUserContextProvider>
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;
