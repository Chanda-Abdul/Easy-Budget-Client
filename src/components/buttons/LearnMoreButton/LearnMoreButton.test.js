import React from 'react';
import ReactDOM from 'react-dom';
import LearnMoreButton from './LearnMoreButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LearnMoreButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});