// README: This is the file Jest looks for if/when we need to do setup for tests.

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// const localStorageMock = {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     clear: jest.fn()
// };

// global.localStorage = localStorageMock;

console.log('Completed setup for tests');
