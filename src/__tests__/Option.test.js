import Option from "../components/Option";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { testItem } from "../constants/testing";

Enzyme.configure({ adapter: new Adapter() });

describe("<Option/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Option selected={true} item={testItem} />);
  });

  it("displays the item name correctly", () => {
    expect(wrapper.find(".component-option__name").text()).toBe(testItem.name);
  });

  it("displays the item price correctly", () => {
    expect(wrapper.find(".component-option__price").text()).toBe(
      `£${testItem.price}`
    );
  });

  it("gains the selected class when the selected prop changes", () => {
    expect(wrapper.find("li").hasClass("selected")).toBe(true);
    wrapper.setProps({ item: testItem, selected: false });
    expect(wrapper.find("li").hasClass("selected")).toBe(false);
  });
});
