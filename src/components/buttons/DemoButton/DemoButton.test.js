import React from 'react';
import ReactDOM from 'react-dom';
import DemoButton from './DemoButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});