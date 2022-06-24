import { useSelector } from "react-redux";
import styles from "./UserProfile.module.scss";
const UserProfile = () => {
  const authUser = useSelector((state) => state.authUserReducer.authUser);
  let authUserEmail = "";
  if (authUser !== "null") {
    authUserEmail = JSON.parse(authUser).email;
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