import styles from "./LogInSignUp.module.scss";
// import { firebaseAuth } from "firebaseConfig";
// import { signOut } from "firebase/auth";
// import { useSelector } from "react-redux";
// // import { UIAuthActions } from "store/UISlices";
// import { authUserActions } from "store/authUserSlice";
// import { useDispatch } from "react-redux";
import { UIAuthContext } from "context/UIContext";
import { useContext } from "react";
import AuthUserContext from "context/authUserContext";

/*To control showing the Auth Form in app.js*/
/*To logout*/
/*Both Header and footer has SignIn features*/
const LogInSignUp = () => {
  // const authUser = useSelector((state) => state.authUserReducer.authUser);
  const authUserCtx = useContext(AuthUserContext);
  const authUser = authUserCtx.authUser;
  const UIAuthCtx = useContext(UIAuthContext);

  // const dispatch = useDispatch();
  // const toggleShowAuthHangdler = () => {
  //   dispatch(UIAuthActions.toggleShowAuth());
  // };

  // const logOutAuthUserHangdler = async () => {
  //   await signOut(firebaseAuth);
  //   dispatch(authUserActions.logOutAuthUser());
  // };

  return (
    <>
      <div className={styles.sign}>
        <div
          data-before-content={
            authUser !== "null" ? "log Out" : "Log in/Sign Up"
          }
          onClick={
            authUser !== "null"
              ? authUserCtx.onLogout
              : UIAuthCtx.onToggleShowAuth
          }
        ></div>
      </div>
    </>
  );
};

export default LogInSignUp;
