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
});
