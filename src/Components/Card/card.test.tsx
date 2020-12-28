import { shallow } from "enzyme";
import CardComponent from "./card.component";

describe("Card Component", () => {
  let shallowRender = shallow(<CardComponent children={<div></div>} />);
  it("must have one div", () => {
    expect(shallowRender.find("div").length).toBe(2);
  });
});
