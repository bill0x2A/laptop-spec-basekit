import Choices from "../components/Choices";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { testComponents, testProduct } from "../constants/testing";
import { componentType } from "../constants/productList";

Enzyme.configure({ adapter: new Adapter() });


describe("<Choices/>", () => {
    it("renders an section for each component type", () => {
      const wrapper = render(
        <Choices
          select={null}
          components={testComponents}
        />
      );
      expect(wrapper.find(".spec-sheet__component").length).toBe(5);
    });
  });