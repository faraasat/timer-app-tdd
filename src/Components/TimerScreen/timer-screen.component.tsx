import { useEffect, useState } from "react";
import { ITimerStates, ITimeStates } from "../../Types/timer-types";
import { increaseTimerTime } from "../../utils/utils";
import "./timer-screen.styles.css";

const TimerScreenComponent: React.FC<ITimerStates> = ({
  playState,
  pauseState,
  resetState,
  setResetState,
}) => {
  const initialTime: ITimeStates = { hh: "00", mm: "00", ss: "00", ms: "00" };
  const [time, setTime] = useState<ITimeStates>(initialTime);

  useEffect(() => {
    let myInterval: any;
    if (playState) {
      myInterval = setInterval(() => {
        const timing: ITimeStates | undefined = updatedTime();
        if (timing) {
          setTime(timing);
        }
      }, 100);
    }
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    if (resetState) {
      setTime({ hh: "00", mm: "00", ss: "00", ms: "00" });
      setResetState(false);
    }
  }, [resetState, setResetState]);

  function updatedTime() {
    if (playState) {
      return increaseTimerTime(time);
    }
  }

  return (
    <div className="timer-screen">
      <span className="timer-screen__display">
        {time.hh}&nbsp;
        <span className="timer-screen__symbol">:</span>&nbsp;
        {time.mm}&nbsp;
        <span className="timer-screen__symbol">:</span>&nbsp;
        {time.ss}&nbsp;
        <span className="timer-screen__symbol">:</span>&nbsp;
        {time.ms}
      </span>
    </div>
  );
};

export default TimerScreenComponent;
