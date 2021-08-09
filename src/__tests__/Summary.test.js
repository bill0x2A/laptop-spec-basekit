import Summary from "../components/Summary";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { testComponents, testContext } from "../constants/testing";
import { componentType } from "../constants/productList";
import { createContext } from "react";

Enzyme.configure({ adapter: new Adapter() });

describe("<Summary/>", () => {
  let wrapper;

  it("should correctly calculate the total price of a list of components", () => {
    wrapper = shallow(<Summary componentsContext={testContext} buy={() => null} />);
    expect(wrapper.find(".summary-window__total").text()).toBe(
      "Total Price : £1200"
    );
  });

  it("reacts correctly to a change in component selection", () => {
    
    // Should result in an increase of £300
    const newTestComponents = {
      ...testComponents,
      [componentType.SCREEN]: "15-retina",
    };

    const newContext = createContext({components : newTestComponents});
    
    wrapper = shallow(<Summary componentsContext={newContext} buy={() => null} />);
    expect(wrapper.find(".summary-window__total").text()).toBe(
      "Total Price : £1500"
    );
  });
});
