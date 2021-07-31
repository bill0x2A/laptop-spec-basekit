import Summary from "../components/Summary";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { testComponents } from "../constants/testing";
import { componentType } from "../constants/productList";

Enzyme.configure({ adapter: new Adapter() });

describe("<Summary/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Summary components={testComponents} buy={() => null} />);
  });

  it("should correctly calculate the total price of a list of components", () => {
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
    wrapper.setProps({ components: newTestComponents });
    expect(wrapper.find(".summary-window__total").text()).toBe(
      "Total Price : £1500"
    );
  });
});
