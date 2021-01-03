import { shallow } from "enzyme";
import ParticlesComponent from "./particles.component";

describe("Particle Component Shallow Render", () => {
  const shallowRender = shallow(<ParticlesComponent />);

  it("should match snapshot", () => {
    expect(shallowRender.debug()).toMatchSnapshot();
  });

  it("should have id tsparticles", () => {
    expect(shallowRender.find("#tsparticles").length).toEqual(1);
  });
});
