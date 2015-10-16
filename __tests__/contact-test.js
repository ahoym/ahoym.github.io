jest.dontMock('../src/js/content/contact');


describe('Contact', () => {
  let Contact = require('../src/js/content/contact');
  let React = require('react/addons');
  let scrollHookMock = require('simple-scroll-hook');

  let TestUtils = React.addons.TestUtils;
  let contactView;

  beforeEach(() => {
    contactView = TestUtils.renderIntoDocument(<Contact />);
  });

  it('when mounted, hooks HTML element animations to scroll hook', () => {
    let registerMockCalls = scrollHookMock.registerMock.mock.calls;
    let expectedElementClasses = [
      'contact__content',
      'contact__documents',
      'contact__methods'
    ];

    expect(registerMockCalls.length).toEqual(3);

    expectedElementClasses.forEach((expectedClass, idx) => {
      let registeredEl = registerMockCalls[idx][0];

      expect(registeredEl.className).toContain(expectedClass);
    });
  });

  it('renders a title', () => {
    let titleEl = TestUtils.findRenderedDOMComponentWithClass(
                    contactView, 'common__section-title').getDOMNode();

    expect(titleEl.innerHTML).toEqual('Contact Me');
  });

  it('renders a github link', () => {
    let expectedLink = 'https://github.com/ahoym';
    let githubEl = TestUtils.findRenderedDOMComponentWithClass(
                      contactView, 'contact__github').getDOMNode();
    let githubLink = TestUtils.findRenderedDOMComponentWithClass(
                      contactView, 'contact__github-link').getDOMNode();

    expect(githubEl.tagName).toEqual('LI');
    expect(githubLink.innerHTML).toEqual('Github');
    expect(githubLink.getAttribute('href')).toEqual(expectedLink);
  });

  it('renders a LinkedIn link', () => {
    let expectedLink = 'https://www.linkedin.com/pub/malcolm-ahoy/78/909/a41';
    let linkedInEl = TestUtils.findRenderedDOMComponentWithClass(
                        contactView, 'contact__linkedin').getDOMNode();
    let linkedInLink = TestUtils.findRenderedDOMComponentWithClass(
                        contactView, 'contact__linkedin-link').getDOMNode();

    expect(linkedInEl.tagName).toEqual('LI');
    expect(linkedInLink.innerHTML).toEqual('LinkedIn');
    expect(linkedInLink.getAttribute('href')).toEqual(expectedLink);
  });

  it('renders my email', () => {
    let expectedEmail = 'malcolmahoy@gmail.com';
    let emailEl = TestUtils.findRenderedDOMComponentWithClass(
                    contactView, 'contact__email').getDOMNode();

    expect(emailEl.tagName).toEqual('LI');
    expect(emailEl.innerHTML).toEqual(expectedEmail);
  });

  it('renders a link to my resume', () => {
    let resumeEl = TestUtils.findRenderedDOMComponentWithClass(
                    contactView, 'contact__resume').getDOMNode();
    // since we actually import the pdf through webpack, the jest preprocess
    //  script nulls this value.
    let expectedEmail = null;

    expect(resumeEl.tagName).toEqual('LI');
    expect(resumeEl.getAttribute('href')).toEqual(expectedEmail);
  });
});
