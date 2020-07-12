import React from 'react';
import ReactDOM from 'react-dom';
import CreateExpensePage from './CreateExpensePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateExpensePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});