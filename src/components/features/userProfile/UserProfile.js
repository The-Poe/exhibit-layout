import AuthUserContext from "context/authUserContext";
import { useContext } from "react";
// import { useSelector } from "react-redux";
import styles from "./UserProfile.module.scss";
const UserProfile = () => {
  // const authUser = useSelector((state) => state.authUserReducer.authUser);
  const AuthUserCtx = useContext(AuthUserContext);
  let authUser = AuthUserCtx.authUser;
  let authUserEmail = "";
  if (authUser !== "null") {
    const authUserJSON = JSON.parse(authUser);
    authUserEmail = authUserJSON.email;
  }
  return (
    <>
      <div className={styles.profile}>
        <div
          data-before-content={authUser === "null" ? "" : authUserEmail}
        ></div>
      </div>
    </>
  );
};

export default UserProfile;
