import { shallow } from "enzyme";
import TimerScreenComponent from "./timer-screen.component";

describe("Timer Component Shallow Render", () => {
  const mockStates = {
    playState: false,
    pauseState: false,
    resetState: false,
    setResetState: function abc() {},
  };

  const shallowRender = shallow(
    <TimerScreenComponent
      playState={mockStates.playState}
      pauseState={mockStates.pauseState}
      resetState={mockStates.resetState}
      setResetState={mockStates.setResetState}
    />
  );

  it("should match snapshot", () => {
    expect(shallowRender.debug()).toMatchSnapshot();
  });

  it("should render a div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should render 5 spans", () => {
    expect(shallowRender.find("span").length).toEqual(4);
  });

  it("should have a className timer-screen", () => {
    expect(shallowRender.find(".timer-screen").length).toBe(1);
  });

  it("should have a className timer-screen__symbol", () => {
    expect(shallowRender.find(".timer-screen__symbol").length).toBe(3);
  });

  it("should have a className timer-screen__display", () => {
    expect(shallowRender.find(".timer-screen__display").length).toBe(1);
  });
});
