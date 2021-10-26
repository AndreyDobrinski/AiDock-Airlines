import { shallow } from "enzyme";
import { Home } from "./AppHome";

describe("Testing in Home Page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  // Test 1
  test("render something", () => {
      expect(wrapper.find("h1").text()).toContain('Planes List')
  });
});
