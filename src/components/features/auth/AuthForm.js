import { useState, useRef, useEffect } from "react";
import classes from "./AuthForm.module.scss";
import { useHistory } from "react-router-dom";
import ShowModal from "components/features/showModal/ShowModal";
import NotificationOverlay from "components/features/showModal/NotificationOverlay";

import { firebaseAuth } from "firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { AuthUserActions } from "store/AuthUserSlice";
import { useDispatch } from "react-redux";

const AuthForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoginMode, setisLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const switchAuthModeHandler = () => {
    setisLoginMode((prevState) => !prevState);
  };

  // const logInAuthUserHangdler = (user) => {
  //   dispatch(AuthUserActions.logInAuthUser(user));
  // };

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // TODO: Add validation

    setIsLoading(true);
    let AuthUser;
    try {
      try {
        if (isLoginMode) {
          AuthUser = await signInWithEmailAndPassword(
            firebaseAuth,
            enteredEmail,
            enteredPassword
          );
        } else {
          AuthUser = await createUserWithEmailAndPassword(
            firebaseAuth,
            enteredEmail,
            enteredPassword
          );
        }
        console.log("AuthUser:", AuthUser);
      } catch (err) {
        console.log("err from first try:", err.message);
        setError(err.message);
        console.log("state error:", error);
        setIsLoading(false);
        return;
      }

      // logInAuthUserHangdler(JSON.stringify(AuthUser));
      setIsLoading(false);
      passwordInputRef.current.value = "";
      props.onClose();
      history.replace("/");
    } catch (err) {
      setIsLoading(false);
      console.log("err from second try:", err.message);
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  /*Remain logged in after refreshin page by using firebase logged Auth state*/
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (firebaseUserState) => {
      dispatch(
        AuthUserActions.logInAuthUser(JSON.stringify(firebaseUserState))
        //could be string "null", so use JSON.parse will turn out as value null.
      );
      console.log("onAuthStateChanged:", firebaseUserState);
    });
  }, [dispatch]);

  return (
    <section className={`${classes.auth}  ${props.className}`}>
      {error && (
        <ShowModal
          modalLayer="top"
          onClose={errorHandler}
          ModalContent={
            <NotificationOverlay
              title="Error!" //{error.title}
              message={error}
              onConfirm={errorHandler}
            />
          }
        />
      )}
      <h1>{isLoginMode ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLoginMode ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLoginMode ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
