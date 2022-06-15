import { useSelector } from "react-redux";
import styles from "./UserProfile.module.scss";
const UserProfile = () => {
  const authUser = useSelector((state) => state.authUserReducer.authUser);
  const authUserJSON = JSON.parse(authUser);
  let authUserEmail = "";
  if (authUserJSON) {
    authUserEmail = JSON.parse(authUser).email;
  }

  return (
    <>
      <div className={styles.profile}>
        <div data-before-content={!authUserJSON ? "" : authUserEmail}></div>
      </div>
    </>
  );
};

export default UserProfile;
