import TimerButtonComponent from "../TimerButton/timer-button.component";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import "./timer.styles.css";
import { useState } from "react";
import TimerScreenComponent from "../TimerScreen/timer-screen.component";

const TimerComponent = () => {
  const [playState, setPlayState] = useState<boolean>(false);
  const [pauseState, setPauseState] = useState<boolean>(false);
  const [resetState, setResetState] = useState<boolean>(false);

  const handlePlay = () => {
    setPauseState(false);
    setResetState(false);
    setPlayState(true);
  };

  const handlePause = () => {
    if (playState) {
      setResetState(false);
      setPlayState(false);
      setPauseState(true);
    }
  };

  const handleReset = () => {
    setPauseState(false);
    setPlayState(false);
    setResetState(true);
  };

  return (
    <div className="timer-component-root">
      <TimerScreenComponent
        playState={playState}
        pauseState={pauseState}
        resetState={resetState}
        setResetState={setResetState}
      />
      <div className="timer-component-alignment">
        <TimerButtonComponent
          id="start-timer"
          onClick={() => handlePlay()}
          toggle={playState}
          IconComponent={PlayArrowIcon}
          color="green"
        />
        <TimerButtonComponent
          id="stop-timer"
          onClick={() => handlePause()}
          toggle={pauseState}
          IconComponent={PauseIcon}
          color="red"
        />
        <TimerButtonComponent
          id="pause-timer"
          onClick={() => handleReset()}
          toggle={resetState}
          IconComponent={RotateLeftIcon}
          color="blue"
        />
      </div>
    </div>
  );
};

export default TimerComponent;
