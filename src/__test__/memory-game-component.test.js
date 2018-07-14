import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });

import App from '../components/app';
describe('App Component', () => {
  it('Tests Props', () => {
    let mountedGame = Enzyme.mount(<App />);
    console.log('game props', mountedGame);
    // expect(mounted.state('content')).toEqual('');
  });
});
