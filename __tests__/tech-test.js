jest.dontMock('../src/js/content/tech');


describe('Tech', () => {
  let Tech = require('../src/js/content/tech');
  let React = require('react/addons');

  let TestUtils = React.addons.TestUtils;
  let techView;

  beforeEach(() => {
    techView = TestUtils.renderIntoDocument(<Tech />);
  });

  it('renders a title', () => {
    let techSection = TestUtils.findRenderedDOMComponentWithClass(
                        techView, 'common__section-title');
    let techSectionEl = React.findDOMNode(techSection);

    expect(techSectionEl.innerHTML).toBe('Technologies');
  });

  it('renders a list of categories', () => {
    let list = TestUtils.findRenderedDOMComponentWithClass(
                  techView, 'tech__list');
    let listEl = React.findDOMNode(list);

    expect(listEl).toBeDefined();
    expect(listEl.tagName).toBe('UL');
  });

  it('renders six categories from its default props', () => {
    let list = TestUtils.findRenderedDOMComponentWithClass(
                  techView, 'tech__list');
    let listEl = React.findDOMNode(list);

    expect(listEl.children.length).toBe(6);
  });
});
