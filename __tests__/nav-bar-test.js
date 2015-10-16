jest.dontMock('../src/js/content/nav-bar');


describe('NavBar', () => {
  let NavBar = require('../src/js/content/nav-bar');
  let React = require('react/addons');
  let scrollHookMock = require('simple-scroll-hook');

  let TestUtils = React.addons.TestUtils;
  let navBarView;

  beforeEach(() => {
    navBarView = TestUtils.renderIntoDocument(<NavBar />);
  });

  it('when mounted, hooks its display into the scroll event', () => {
    let registerMockCalls = scrollHookMock.registerMock.mock.calls;

    expect(registerMockCalls[0][0].className).toEqual('nav-bar');
  });

  it('renders a progress bar', () => {
    let progressBar = TestUtils.findRenderedDOMComponentWithTag(
                        navBarView, 'progress').getDOMNode();

    expect(progressBar).toBeDefined();
  });

  it('renders seven list items corresponding to sections of the site', () => {
    let navBarEl = TestUtils.findRenderedDOMComponentWithClass(
                      navBarView, 'nav-bar__sections').getDOMNode();

    expect(navBarEl.children.length).toEqual(7);
  });
});
