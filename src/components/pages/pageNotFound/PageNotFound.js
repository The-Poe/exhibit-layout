import Button from "components/UI/Button";
import { useHistory } from "react-router-dom";
import styles from "./PageNotFound.module.scss";
import Countdowntimer from "../../features/countdowntimer/Countdowntimer";

export const PageNotFound = () => {
  const history = useHistory();
  const backToHome = () => {
    history.push("/");
  };

  return (
    <div className={`${styles.pageNotFound} textCenter`}>
      <br />
      <h2>Sorry</h2>
      <p>That page cannot be found.</p>
      <br />
      <Button onClick={backToHome}>click to back to the homepage</Button>
      <br />
      <p>
        (or will auto redirect in &nbsp;
        <Countdowntimer secs={5}></Countdowntimer>
        &nbsp; seconds)
      </p>
    </div>
  );
};
