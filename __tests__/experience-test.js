jest.dontMock('../src/js/content/experience');

describe('Experience View', () => {
  let Experience = require('../src/js/content/experience');
  let React = require('react/addons');

  let TestUtils = React.addons.TestUtils;
  let experienceView;

  beforeEach(() => {
    experienceView = TestUtils.renderIntoDocument(<Experience />);
  });

  it('should render a title', () => {
    let title = TestUtils.findRenderedDOMComponentWithTag(
                  experienceView, 'h3');
    let titleEl = React.findDOMNode(title);

    expect(titleEl).toBeDefined();
    expect(titleEl.innerHTML).toBe('Experience');
  });

  it('should render a list of companies', () => {
    let companies = TestUtils.findRenderedDOMComponentWithClass(
                      experienceView, 'experience__companies');
    let companiesEl = React.findDOMNode(companies);

    expect(companiesEl).toBeDefined();
  });
});
