import React from 'react';
import ReactDOM from 'react-dom';
import HowToSection from './HowToSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HowToSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});