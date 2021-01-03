import { shallow } from "enzyme";
import PauseIcon from "@material-ui/icons/Pause";
import TimerButtonComponent from "./timer-button.component";

describe("Timer Button Shallow Render", () => {
  const mockParams = {
    onClick: jest.fn(),
    toggle: false,
    IconComponent: PauseIcon,
    color: "pink",
    id: "test-timer-button",
  };

  const shallowRender = shallow(<TimerButtonComponent {...mockParams} />);

  it("should match snapshot", () => {
    expect(shallowRender).toMatchSnapshot();
  });

  it("should render div(s)", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should render a button", () => {
    expect(shallowRender.find("button").length).toEqual(1);
  });
});
