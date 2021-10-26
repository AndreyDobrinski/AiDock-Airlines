import { shallow } from "enzyme";
// import { Home } from "../../pages/AppHome/Home";
import { AirlineList } from "./AirlineList";


describe("Testing in AirlineList", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AirlineList />);
  });

  // Test 1
  test("render 'List' txt", () => {
    //   console.log('Testing:::' , wrapper.debug());
    // expect(wrapper.find("h1").text()).toContain("List");
  });
});
