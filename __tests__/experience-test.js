jest.dontMock('../src/js/content/experience');


describe('Experience View', () => {
  let Experience = require('../src/js/content/experience');
  let React = require('react/addons');
  let scrollHookMock = require('simple-scroll-hook');

  let TestUtils = React.addons.TestUtils;
  let experienceView;

  beforeEach(() => {
    experienceView = TestUtils.renderIntoDocument(<Experience />);
  });

  it('when mounted, hooks HTML Element animations to scroll hook', () => {
    let registerMockCalls = scrollHookMock.registerMock.mock.calls;
    expect(registerMockCalls.length).toEqual(1);

    let registeredEl = registerMockCalls[0][0];
    expect(registeredEl.className).toContain('experience__companies');
  });

  it('should render a title', () => {
    let titleEl = TestUtils.findRenderedDOMComponentWithTag(
                  experienceView, 'h3').getDOMNode();

    expect(titleEl).toBeDefined();
    expect(titleEl.innerHTML).toBe('Experience');
  });

  it('should render a list of companies', () => {
    let companiesEl = TestUtils.findRenderedDOMComponentWithClass(
                      experienceView, 'experience__companies').getDOMNode();

    expect(companiesEl).toBeDefined();
  });
});
