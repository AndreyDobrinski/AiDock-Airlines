import { shallow } from "enzyme";
import { InputSearchDistination } from "./InputSearchDistination";

describe('Testing in InputSearchDistination', () => {
  
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<InputSearchDistination />)
    })
  
    // Test 1
    test('render something', () => {
    //   expect(wrapper.find("h1").text()).toContain('Home')
    });
    
  });