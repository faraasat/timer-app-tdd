import React from "react";
import App from "./App";
import { shallow, render } from "enzyme";
import { CustomCard, ParticlesBody, Timer } from "../../listing";
import { Container } from "@material-ui/core";
// import { CustomCard } from "../../listing";

describe("App Component Shallow Render", () => {
  const shallowRender = shallow(<App />);

  it("should match the snapshot", () => {
    expect(shallowRender.debug()).toMatchSnapshot();
  });

  it("should render a div", () => {
    expect(shallowRender.find("div").length).toEqual(1);
  });

  it("should render a CustomCard Component", () => {
    expect(
      shallowRender.containsMatchingElement(<CustomCard children={<Timer />} />)
    ).toEqual(true);
  });

  it("should render a Container Component", () => {
    expect(
      shallowRender.containsMatchingElement(
        <Container
          children={
            <CustomCard>
              <Timer />
            </CustomCard>
          }
        />
      )
    ).toEqual(true);
  });

  it("should render a ParticlesBody Component", () => {
    expect(shallowRender.containsMatchingElement(<ParticlesBody />)).toEqual(
      true
    );
  });

  it("should render a Timer Component", () => {
    expect(shallowRender.containsMatchingElement(<Timer />)).toEqual(true);
  });
});

describe("App Component Full Render", () => {
  const fullRender = render(<App />);

  it("should match the snapshot", () => {
    expect(fullRender).toMatchSnapshot();
  });

  it("should render a div(s)", () => {
    expect(fullRender.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
