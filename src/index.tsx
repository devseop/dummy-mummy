import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import reset from 'reset';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.Fragment>
    <Global styles={reset} />
    <App />
  </React.Fragment>,
);
