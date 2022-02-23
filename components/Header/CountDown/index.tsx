import { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import styles from "./Countdown.module.scss";

const Countdown: NextPage = () => {
  const [duration, setDuration] = useState(
    moment.duration(28, "hours").asMilliseconds(),
  );

  const durationFormat = useMemo(() => moment.duration(duration), [duration]);
  useEffect(() => {
    setInterval(() => {
      setDuration((value) =>
        moment.duration(value).subtract(1000, "milliseconds").asMilliseconds(),
      );
    }, 1000);
  }, []);
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.countDownBanner}>
        <span>
          <span className={styles.cruiticalNumber}>50% </span>
          off Valentine's Day
        </span>
        &nbsp;|&nbsp;
        <span>
          Offer ends in{" "}
          <span className={styles.cruiticalNumber}>
            {" "}
            {durationFormat.days()}{" "}
          </span>{" "}
          day
          <span className={styles.cruiticalNumber}>
            {" "}
            {durationFormat.hours()}{" "}
          </span>{" "}
          hrs
          <span className={styles.cruiticalNumber}>
            {" "}
            {durationFormat.minutes()}{" "}
          </span>{" "}
          min
          <span className={styles.cruiticalNumber}>
            {" "}
            {durationFormat.seconds()}{" "}
          </span>{" "}
          secs
        </span>
      </div>
    </div>
  );
};
export default Countdown;
