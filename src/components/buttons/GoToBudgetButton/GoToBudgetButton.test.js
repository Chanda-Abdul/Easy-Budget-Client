import React from 'react';
import ReactDOM from 'react-dom';
import GoToBudgetButton from './GoToBudgetButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoToBudgetButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});