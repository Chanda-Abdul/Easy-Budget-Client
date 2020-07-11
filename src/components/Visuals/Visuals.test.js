import React from 'react';
import ReactDOM from 'react-dom';
import Visuals from './Visuals';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Visuals />, div);
  ReactDOM.unmountComponentAtNode(div);
});