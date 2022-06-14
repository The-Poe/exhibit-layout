import styles from "./LogInSignUp.module.scss";
import { UIAuthActions } from "store/UISlices";
import { useDispatch } from "react-redux";

import { firebaseAuth } from "firebaseConfig";
import { signOut } from "firebase/auth";
import { AuthUserActions } from "store/AuthUserSlices";
import { useSelector } from "react-redux";

/*To control showing the Auth Form in app.js*/
/*Both Header and footer has SignIn features*/
const LogInSignUp = () => {
  const authUser = useSelector((state) => state.AuthUserSlice.authUser);

  const dispatch = useDispatch();
  const toggleShowAuthHangdler = () => {
    dispatch(UIAuthActions.toggleShowAuth());
  };
  const logOutAuthUserHangdler = async () => {
    await signOut(firebaseAuth);
    dispatch(AuthUserActions.logOutAuthUser());
  };

  return (
    <>
      <div className={styles.sign}>
        <div
          // data-before-content="Log in/Sign In"
          data-before-content={!authUser ? "Log in/Sign Up" : "log Out"}
          // onClick={toggleShowAuthHangdler}
          onClick={!authUser ? toggleShowAuthHangdler : logOutAuthUserHangdler}
        ></div>
      </div>
    </>
  );
};

export default LogInSignUp;
