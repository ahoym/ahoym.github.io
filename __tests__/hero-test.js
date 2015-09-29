jest.dontMock('../src/js/content/hero');


describe('Hero view', () => {
  let Hero = require('../src/js/content/hero');
  let React = require('react/addons');

  let TestUtils = React.addons.TestUtils;
  let heroView;

  beforeEach(() => {
    heroView = TestUtils.renderIntoDocument(<Hero />);
  });

  it('renders a hero section into the document', () => {
    let heroSection = TestUtils.findRenderedDOMComponentWithClass(
                        heroView, 'hero');
    let heroSectionEl = React.findDOMNode(heroSection);

    expect(heroSectionEl).toBeDefined();
  });

  it('renders my name', () => {
    let name = TestUtils.findRenderedDOMComponentWithTag(
                        heroView, 'h1');
    let nameEl = React.findDOMNode(name);

    expect(nameEl.className).toContain('hero__name');
    expect(nameEl.innerHTML).toBe('Malcolm Ahoy');
  });

  it('renders my title', () => {
    let title = TestUtils.findRenderedDOMComponentWithTag(
                        heroView, 'h2');
    let titleEl = React.findDOMNode(title);

    expect(titleEl.className).toContain('hero__title');
    expect(titleEl.innerHTML).toBe('Web Application Developer.');
  });
});
