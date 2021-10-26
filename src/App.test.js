import { shallow } from 'enzyme';
import { AppAbout } from './pages/AppAbout/AppAbout';

// tutorial : https://www.youtube.com/watch?v=-bmdf1oATQo
// documentations :
// Jest : https://jestjs.io/docs/getting-started
// Enzyme : https://www.npmjs.com/package/enzyme

// NOTE: jest is automatically installed when you do "npx create-react-app"


// describe: a way to discribe all of your tests in here ,useful for testing multiple stuff for only one page.
describe('Testing in About Page', () => {
  // testing only at the about page

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AppAbout />)
    // select the place where you want to run tests
  })

  // Test 1
  test('render home txt', () => {
    expect(wrapper.find("h1").text()).toContain('About')
    // Ask what do you want to test
  });




});