import "./timer-button.styles.css";
import { IToggleButton } from "../../Types/timer-types";
import { Icon } from "@material-ui/core";

const TimerButtonComponent: React.FC<IToggleButton> = ({
  onClick,
  toggle,
  IconComponent,
  color,
  id,
}) => {
  return (
    <div className="timer-toggle-button">
      <button
        id={id}
        onClick={onClick}
        className={`timer-toggle-button__button ${
          toggle ? "timer-toggle-button__button-active" : ""
        }`}
      >
        <Icon
          className={`timer-toggle-button__logo ${
            toggle ? "timer-toggle-button__logo-active" : ""
          }`}
          component={IconComponent}
          style={{ color: color }}
        />
      </button>
    </div>
  );
};

export default TimerButtonComponent;
