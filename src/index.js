import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './Context';

ReactDOM.render(
  <ThemeProvider>
  <HashRouter>
    <App />
  </HashRouter>,  
  </ThemeProvider>,
  document.getElementById('root')
);

