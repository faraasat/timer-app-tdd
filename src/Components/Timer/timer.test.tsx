import { EnzymePropSelector, shallow } from "enzyme";
import TimerComponent from "./timer.component";

describe("Timer Component Shallow Render", () => {
  let shallowRender: EnzymePropSelector;
  beforeEach(() => {
    shallowRender = shallow(<TimerComponent />);
  });

  it("should match snapshot", () => {
    expect(shallowRender.debug()).toMatchSnapshot();
  });

  it("must have one div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(2);
  });

  it("should have class timer-component-root", () => {
    expect(shallowRender.find(".timer-component-root").length).toEqual(1);
  });

  it("should have class timer-component-alignment", () => {
    expect(shallowRender.find(".timer-component-alignment").length).toEqual(1);
  });
});
