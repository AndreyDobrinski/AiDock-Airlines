import { shallow } from "enzyme";
import { AppAbout } from "./AppAbout";

describe("Testing in About Page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AppAbout />);
  });

  // Test 1
  test('render home txt', () => {
    expect(wrapper.find("h1").text()).toContain('About')
  });
  
});
