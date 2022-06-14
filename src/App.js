import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Counter } from "./features/counter/Counter";
import "./App.scss";
import Header from "components/layout/header/Header";
import Detail from "components/pages/detail/Detail";
import Home from "components/layout/home/Home";
import Product from "components/pages/product/Product";
import Checkout from "components/pages/checkout/Checkout";
import CheckoutDone from "components/pages/checkout/CheckoutDone";
import { useSelector, useDispatch } from "react-redux";
import { UIAuthActions } from "store/UISlices";
import ShowModal from "components/features/showModal/ShowModal";
import AuthForm from "components/features/auth/AuthForm";

function App() {
  const authIsShow = useSelector((state) => state.UIAuthSlice.authIsShow);
  // const authUser = useSelector((state) => state.AuthUserSlice.authUser);
  const dispatch = useDispatch();
  // const showAuthUserHangdler = () => {
  //   console.log("authUser:", JSON.parse(authUser));
  // };
  const toggleShowAuthHangdler = () => {
    dispatch(UIAuthActions.toggleShowAuth());
  };

  const authClasses = [authIsShow ? "opacity1" : "invisible opacity0"];

  return (
    <Router>
      <div className="App">
        {/* <button onClick={showAuthUserHangdler}>show Auth User</button> */}
        <ShowModal
          className={authClasses}
          modalLayer="second"
          onClose={toggleShowAuthHangdler}
          ModalContent={<AuthForm onClose={toggleShowAuthHangdler} />}
        />
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
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/checkoutdone">
            <CheckoutDone />
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
