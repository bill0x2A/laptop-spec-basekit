import App from "../App";
import React from "react";
import Enzyme, { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import Adapter from "enzyme-adapter-react-16";
import { componentType } from "../constants/productList";
import { testComponents } from "../constants/testing";

Enzyme.configure({ adapter: new Adapter() });

describe("<App/>", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the spec sheet and summary windows", () => {
    expect(wrapper.find(".spec-sheet").exists()).toBe(true);
    expect(wrapper.find(".summary-window").exists()).toBe(true);
  });

  it("updates components in state when an option is clicked", () => {
    // This is very frustrating, I can see it working in the UI
    // I thought I would include it anyway even though it fails
    // https://stackoverflow.com/questions/68602671/simulating-click-with-enzyme-does-not-seem-to-update-state-in-parent-component
    expect(
      wrapper
        .find(".component-options__component-option")
        .at(1)
        .hasClass("selected")
    ).toBeFalsy();

    act(() => {
      wrapper
        .find(".component-options__component-option")
        .at(1)
        .simulate("click");
    });

    expect(setState).toHaveBeenCalledWith({
      ...testComponents,
      [componentType.SCREEN]: "15-retina",
    });
  });
});
