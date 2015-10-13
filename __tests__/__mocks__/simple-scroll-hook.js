const scrollHookMock = jest.genMockFromModule('simple-scroll-hook');
const scrollHookRegisterMock = jest.genMockFunction();

scrollHookMock.register = scrollHookRegisterMock.mockReturnThis();
scrollHookMock.registerMock = scrollHookRegisterMock;

export default scrollHookMock;
