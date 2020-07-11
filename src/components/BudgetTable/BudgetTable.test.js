import React from 'react';
import ReactDOM from 'react-dom';
import BudgetTable from './BudgetTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BudgetTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});