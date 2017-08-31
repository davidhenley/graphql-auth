import React from 'react';
import { render } from 'react-dom';

const Root = () => {
  return (
    <div>
      Hello There
    </div>
  );
}

render(<Root />, document.querySelector('#root'));
