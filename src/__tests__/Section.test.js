import Section from "../components/Section";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { testComponents, testProduct } from "../constants/testing";
import { componentType } from "../constants/productList";

Enzyme.configure({ adapter: new Adapter() });

describe("<Section/>", () => {
  it("renders an option for each component choice", () => {
    const wrapper = render(
      <Section
        product={testProduct}
        select={null}
        productKey={componentType.SCREEN}
        components={testComponents}
      />
    );
    expect(wrapper.find("li").length).toBe(2);
  });
});
