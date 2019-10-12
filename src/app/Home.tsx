import React from 'react';
import { render } from 'react-dom';
import { Header } from 'semantic-ui-react';

render(
  <Header as="h2" block>
    Hello!
  </Header>,
  document.getElementById('content'),
);
