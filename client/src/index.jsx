import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

function Root() {
  return (
    <div>
      <p>HI</p>
      <App />
    </div>
  );
}
render(<Root />, document.getElementById('Root'));
