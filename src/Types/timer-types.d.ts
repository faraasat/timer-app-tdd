export interface IChild {
  children:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild
    | React.ReactChildren;
}

export interface IToggleButton {
  onClick: any;
  toggle: boolean;
  IconComponent: React.ReactComponentElement;
  color: string;
  id: string;
}

export interface ITimerStates {
  playState: boolean;
  pauseState: boolean;
  resetState: boolean;
  setResetState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITimeStates {
  hh: string;
  mm: string;
  ss: string;
  ms: string;
}
