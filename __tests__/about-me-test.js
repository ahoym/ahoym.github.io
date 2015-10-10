jest.dontMock('../src/js/content/about-me');

describe('AboutMe', () => {
  let AboutMe = require('../src/js/content/about-me');
  let React = require('react/addons');

  let TestUtils = React.addons.TestUtils;
  let aboutMeView;

  beforeEach(() => {
    aboutMeView = TestUtils.renderIntoDocument(<AboutMe />);
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
