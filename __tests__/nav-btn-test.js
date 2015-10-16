jest.dontMock('../src/js/content/nav-btn');


describe('NavBtn', () => {
  let NavBtn = require('../src/js/content/nav-btn');
  let React = require('react/addons');
  let smoothScrollMock = require('smoothscroll');

  let TestUtils = React.addons.TestUtils;
  let navBtnView;

  beforeEach(() => {
    navBtnView = TestUtils.renderIntoDocument(
      <NavBtn title='Foobar yo' section='bar' />);
  });

  it('renders the passed in title', () => {
    let titleEl = TestUtils.findRenderedDOMComponentWithTag(
                    navBtnView, 'p').getDOMNode();

    expect(titleEl.innerHTML).toEqual('Foobar yo');
  });

  it('onClick, it smooth scrolls to the passed in section', () => {
    let navBtnEl = TestUtils.findRenderedDOMComponentWithTag(
                      navBtnView, 'LI').getDOMNode();

    TestUtils.Simulate.click(navBtnEl);

    // Same time as in nav-btn file.
    let expectedAnimationTime = 1000;

    expect(smoothScrollMock.mock.calls.length).toEqual(1);
    expect(smoothScrollMock.mock.calls[0]).toContain(expectedAnimationTime);
  });
});
