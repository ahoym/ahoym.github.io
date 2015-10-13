jest.dontMock('../src/js/content/tech');


describe('Tech', () => {
  let Tech = require('../src/js/content/tech');
  let React = require('react/addons');
  let scrollHookMock = require('simple-scroll-hook');

  let TestUtils = React.addons.TestUtils;
  let techView;

  beforeEach(() => {
    techView = TestUtils.renderIntoDocument(<Tech />);
  });

  it('when mounted, hooks HTML Element animations to scroll hook', () => {
    let registerMockCalls = scrollHookMock.registerMock.mock.calls;
    let expectedElementClasses = [
      'tech__content',
      'tech__list'
    ];

    expect(registerMockCalls.length).toEqual(2);

    expectedElementClasses.forEach((expectedClass, idx) => {
      let registeredEl = registerMockCalls[idx][0];

      expect(registeredEl.className).toContain(expectedClass);
    });
  });

  it('renders a title', () => {
    let techSectionEl = TestUtils.findRenderedDOMComponentWithClass(
                        techView, 'common__section-title').getDOMNode();

    expect(techSectionEl.innerHTML).toBe('Technologies');
  });

  it('renders a list of categories', () => {
    let listEl = TestUtils.findRenderedDOMComponentWithClass(
                  techView, 'tech__list').getDOMNode();

    expect(listEl).toBeDefined();
    expect(listEl.tagName).toBe('UL');
  });

  it('renders six categories from its default props', () => {
    let listEl = TestUtils.findRenderedDOMComponentWithClass(
                  techView, 'tech__list').getDOMNode();

    expect(listEl.children.length).toBe(6);
  });
});
