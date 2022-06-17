import styles from "./LogInSignUp.module.scss";
import { UIAuthActions } from "store/UISlices";
import { useDispatch } from "react-redux";

import { firebaseAuth } from "firebaseConfig";
import { signOut } from "firebase/auth";
import { authUserActions } from "store/authUserSlice";
import { useSelector } from "react-redux";

/*To control showing the Auth Form in app.js*/
/*Both Header and footer has SignIn features*/
const LogInSignUp = () => {
  const authUser = useSelector((state) => state.authUserReducer.authUser);
  const authUserJSON = JSON.parse(authUser);

  const dispatch = useDispatch();
  const toggleShowAuthHangdler = () => {
    dispatch(UIAuthActions.toggleShowAuth());
  };
  const logOutAuthUserHangdler = async () => {
    await signOut(firebaseAuth);
    dispatch(authUserActions.logOutAuthUser());
  };

  return (
    <>
      <div className={styles.sign}>
        <div
          data-before-content={!authUserJSON ? "Log in/Sign Up" : "log Out"}
          onClick={
            !authUserJSON ? toggleShowAuthHangdler : logOutAuthUserHangdler
          }
        ></div>
      </div>
    </>
  );
};

export default LogInSignUp;
