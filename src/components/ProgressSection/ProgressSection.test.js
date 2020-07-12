import React from 'react';
import ReactDOM from 'react-dom';
import ProgressSection from './ProgressSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});