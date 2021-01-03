import { shallow } from "enzyme";
import CardComponent from "./card.component";

describe("Card Component Shallow", () => {
  let shallowRender = shallow(<CardComponent children={<div></div>} />);

  it("should match snapshot", () => {
    expect(shallowRender.debug()).toMatchSnapshot();
  });

  it("must have one div", () => {
    expect(shallowRender.find("div").length).toBe(2);
  });

  it("should have class timer-card-component", () => {
    expect(shallowRender.find(".timer-card-component").length).toEqual(1);
  });
});
