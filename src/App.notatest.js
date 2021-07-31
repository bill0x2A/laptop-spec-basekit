// import React from "react";
// import Enzyme, { render, mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import jasmineEnzyme from 'jasmine-enzyme';
// import App from "./App";

// Enzyme.configure({ adapter: new Adapter() });

// // I submitted this slighly later than I wanted to take some time to learn some basic React testing with Enzyme.
// // I was not previously familliar with testing React code.
// // Hopefully you see this as the right choice!

// describe("App", () => {

//     beforeEach(() => {
//         jasmineEnzyme();
//     })

//     const wrapper = mount(<App />);

//   it("correctly adds the price of the default values", () => {
//     const price = wrapper.find(".summary-window__total");
//     expect(price.text()).toBe("Total Price : £1200");
//   });

//   it("changes the selected item when clicked", () => {
//       const smallScreen = wrapper.first(".component-options__component-option");

//       expect(smallScreen).toMatchSelector(".selected");

//   })
// });
