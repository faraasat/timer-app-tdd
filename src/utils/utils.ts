import { ITimeStates } from "../Types/timer-types";

export const stringifyNum = (number: number): string => {
  if (number < 10) {
    return "0" + String(number);
  }
  return String(number);
};

export function increaseTimerTime({
  hh,
  mm,
  ss,
  ms,
}: ITimeStates): ITimeStates {
  const intTimeArray = [Number(hh), Number(mm), Number(ss), Number(ms)];
  intTimeArray[3] = intTimeArray[3] + 1;
  if (intTimeArray[3] === 60) {
    intTimeArray[3] = 0;
    intTimeArray[2] = intTimeArray[2] + 1;
  }
  if (intTimeArray[2] === 60) {
    intTimeArray[2] = 0;
    intTimeArray[1] = intTimeArray[1] + 1;
  }
  if (intTimeArray[1] === 60) {
    intTimeArray[1] = 0;
    intTimeArray[0] = intTimeArray[0] + 1;
  }
  return {
    hh: stringifyNum(intTimeArray[0]),
    mm: stringifyNum(intTimeArray[1]),
    ss: stringifyNum(intTimeArray[2]),
    ms: stringifyNum(intTimeArray[3]),
  };
}
