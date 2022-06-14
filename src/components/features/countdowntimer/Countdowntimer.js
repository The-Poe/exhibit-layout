import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Countdowntimer(props) {
  const history = useHistory();
  const { secs } = props;

  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);
  // The state for our timer
  const [timer, setTimer] = useState(secs);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, seconds } = getTimeRemaining(e);
    console.log("startTimer total:", total);
    if (total > 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the begining of the variable
      setTimer(seconds);
    } else if (total <= 0) {
      /*redirect*/
      history.push("/");
      clearTimer();
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer(secs);

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);

    if (!!e) {
      const id = setInterval(() => {
        startTimer(e);
      }, 250);
      Ref.current = id;
    }
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + secs);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    let isTimerZero = false;
    if (isTimerZero === false) {
      clearTimer(getDeadTime());
    }
    //useEffect cancel up
    return () => {
      isTimerZero = true;
    };
  }, []);

  return <span>{timer}</span>;
}
