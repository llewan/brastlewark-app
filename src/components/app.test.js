import React, {useState as useStateMock} from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import data from '../data/data.json';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('<App />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render a Search component', () => {
    const actual = wrapper.find('Search').length;
    expect(actual).toBe(1);
  });
  it('should render a Modal component', () => {
    const actual = wrapper.find('Modal').length;
    expect(actual).toBe(1);
  });
  it(`should render ${data.Brastlewark.length} Cards components`, () => {
    const actual = wrapper.find('Card').length;
    expect(actual).toBe(data.Brastlewark.length);
  });
  it(`should filter citizens`, () => {
    wrapper.find('Search').props().onSearch('Tobus');
    expect(setState).toHaveBeenCalledTimes(1);
  });
  it(`should set a selected citizen`, () => {
    wrapper.find('Card').first().props().onSelect(5);
    expect(setState).toHaveBeenCalledWith(data.Brastlewark[5]);
  });
});