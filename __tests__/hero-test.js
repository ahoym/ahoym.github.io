jest.dontMock('../src/js/content/hero');


describe('Hero view', () => {
  let Hero = require('../src/js/content/hero');
  let React = require('react/addons');
  let smoothScrollMock = require('smoothscroll');

  let TestUtils = React.addons.TestUtils;
  let heroView;

  beforeEach(() => {
    heroView = TestUtils.renderIntoDocument(<Hero />);
  });

  it('renders a hero section into the document', () => {
    let heroSectionEl = TestUtils.findRenderedDOMComponentWithClass(
                          heroView, 'hero').getDOMNode();

    expect(heroSectionEl).toBeDefined();
  });

  it('renders my name', () => {
    let nameEl = TestUtils.findRenderedDOMComponentWithTag(
                    heroView, 'h1').getDOMNode();

    expect(nameEl.className).toContain('hero__name');
    expect(nameEl.innerHTML).toBe('Malcolm Ahoy');
  });

  it('renders my title', () => {
    let titleEl = TestUtils.findRenderedDOMComponentWithTag(
                    heroView, 'h2').getDOMNode();

    expect(titleEl.className).toContain('hero__title');
    expect(titleEl.innerHTML).toBe('Web Application Developer.');
  });

  it('renders a button', () => {
    let buttonEl = TestUtils.findRenderedDOMComponentWithTag(
                    heroView, 'button').getDOMNode();

    expect(buttonEl.className).toContain('hero__btn');
    expect(buttonEl.innerHTML).toBe('Get to know me');
  });

  it('button calls the scrollToExperience callback on click', () => {
    let button = TestUtils.findRenderedDOMComponentWithTag(heroView, 'button');
    // Time is the same as it is in hero.js
    let expectedAnimationTime = 1000;

    TestUtils.Simulate.click(button);

    expect(smoothScrollMock.mock.calls.length).toEqual(1);
    expect(smoothScrollMock.mock.calls[0]).toContain(expectedAnimationTime);
  });
});
