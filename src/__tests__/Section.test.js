import Section from "../components/Section";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { testComponents, testProduct, testContext } from "../constants/testing";
import { componentType } from "../constants/productList";

Enzyme.configure({ adapter: new Adapter() });

describe("<Section/>", () => {
  it("renders an option for each component choice", () => {
    const wrapper = render(
      <Section
        product={testProduct}
        productKey={componentType.SCREEN}
        components={testComponents}
        componentContext={testContext}
      />
    );
    expect(wrapper.find("li").length).toBe(2);
  });
});
