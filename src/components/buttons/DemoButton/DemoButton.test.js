import React from 'react';
import ReactDOM from 'react-dom';
import DemoButton from './DemoButton';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
  <DemoButton />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});