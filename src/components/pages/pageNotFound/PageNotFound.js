import { useHistory } from "react-router-dom";
import Countdowntimer from "../../features/countdowntimer/Countdowntimer";

export const PageNotFound = () => {
  const history = useHistory();
  const backToHome = () => {
    history.push("/");
  };

  return (
    <div className="not-found">
      <br />
      <h2>Sorry</h2>
      <p>That page cannot be found.</p>
      <br />
      <button
        className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
        onClick={backToHome}
      >
        click to back to the homepage
      </button>
      <br />
      <p>
        (or will auto redirect in &nbsp;
        <Countdowntimer secs={10}></Countdowntimer>
        &nbsp; seconds)
      </p>
    </div>
  );
};
