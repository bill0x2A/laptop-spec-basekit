import Choices from "../components/Choices";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { testComponents, testContext } from "../constants/testing";

Enzyme.configure({ adapter: new Adapter() });


describe("<Choices/>", () => {
    it("renders an section for each component type", () => {
      const wrapper = render(
        <Choices
          select={null}
          components={testComponents}
          componentContext={testContext}
        />
      );
      expect(wrapper.find(".spec-sheet__component").length).toBe(5);
    });
  });