jest.dontMock('../src/js/content/about-me');


describe('AboutMe', () => {
  let AboutMe = require('../src/js/content/about-me');
  let React = require('react/addons');
  let scrollHookMock = require('simple-scroll-hook');

  let TestUtils = React.addons.TestUtils;
  let aboutMeView;

  beforeEach(() => {
    aboutMeView = TestUtils.renderIntoDocument(<AboutMe />);
  });

  /**
   * NB, this test has to go first since the mock is a singleton, and its
   * calls stack for each beforeEach hook. This is because this registration
   * is done in the componentDidMount function in the component life-cycle
   */
  it('when mounted, hooks HTML Element animations to scroll hook', () => {
    let registerMockCalls = scrollHookMock.registerMock.mock.calls;
    // This is the order they are registered in about-me.js
    let expectedElementClasses = [
      'about__content',
      'about__picture',
      'about__bio',
      'about__contributions'
    ];

    expect(registerMockCalls.length).toEqual(4);

    expectedElementClasses.forEach((expectedClass, idx) => {
      let registeredEl = registerMockCalls[idx][0];

      expect(registeredEl.className).toContain(expectedClass);
    });
  });

  it('renders content', () => {
    let contentEl = TestUtils.findRenderedDOMComponentWithClass(
                      aboutMeView, 'about__content').getDOMNode();

    expect(contentEl).toBeDefined();
  });

  it('renders a title', () => {
    let titleEl = TestUtils.findRenderedDOMComponentWithClass(
                    aboutMeView, 'common__section-title').getDOMNode();

    expect(titleEl.innerHTML).toEqual('About Me');
  });

  it('renders a bio', () => {
    let bioEl = TestUtils.findRenderedDOMComponentWithClass(
                  aboutMeView, 'about__bio').getDOMNode();

    expect(bioEl.children.length).toBe(7);
    expect(bioEl.children[0].tagName).toBe('P');
    expect(bioEl.children[6].tagName).toBe('UL');
  });

  it('renders a picture', () => {
    let imgContainerEl = TestUtils.findRenderedDOMComponentWithClass(
                          aboutMeView, 'about__picture').getDOMNode();

    expect(imgContainerEl.tagName).toBe('DIV');
    expect(imgContainerEl.children[0].tagName).toBe('IMG');
    expect(imgContainerEl.children[0].getAttribute('alt')).toBe('Malcolm Ahoy');
  });
});
