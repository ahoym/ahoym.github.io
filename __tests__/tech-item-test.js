jest.dontMock('../src/js/content/tech-item');

describe('TechItem', () => {
  let TechItem = require('../src/js/content/tech-item');
  let React = require('react/addons');

  let TestUtils = React.addons.TestUtils;
  let techItemView;
  let expectedCategory = {
    title: 'Pokemon Cities',
    items: [ 'Pallet', 'Viridian', 'Pewter', 'Cerulean' ]
  };

  beforeEach(() => {
    techItemView = TestUtils.renderIntoDocument(
                      <TechItem techCategory={expectedCategory} />);
  });

  it('renders a title', () => {
    let title = TestUtils.findRenderedDOMComponentWithClass(
                  techItemView, 'tech__list-title');
    let titleEl = React.findDOMNode(title);

    expect(titleEl.innerHTML).toBe('Pokemon Cities');
  });

  it('renders category content', () => {
    let content = TestUtils.findRenderedDOMComponentWithClass(
                    techItemView, 'tech__list-content');
    let contentEl = React.findDOMNode(content);

    expect(contentEl.innerHTML).toBe('Pallet, Viridian, Pewter, Cerulean');
  });

  it('renders a container for sprites', () => {
    let spriteContainer = TestUtils.findRenderedDOMComponentWithClass(
                            techItemView, 'tech__sprites');
    let spriteContainerEl = React.findDOMNode(spriteContainer);

    expect(spriteContainerEl).toBeDefined();
    expect(spriteContainerEl.children.length).toBe(4);
  });

  it('renders sprites for each category item', () => {
    let spriteContainer = TestUtils.findRenderedDOMComponentWithClass(
                            techItemView, 'tech__sprites');
    let spriteContainerEl = React.findDOMNode(spriteContainer);
    let [
      actualPallet,
      actualViridian,
      actualPewter,
      actualCerulean
    ] = Array.prototype.slice.call(spriteContainerEl.children);

    expect(actualPallet.className).toContain('sprite--pallet');
    expect(actualViridian.className).toContain('sprite--viridian');
    expect(actualPewter.className).toContain('sprite--pewter');
    expect(actualCerulean.className).toContain('sprite--cerulean');
  });
});
