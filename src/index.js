import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import UserDetailsContextProvider from './context/UserDetailsContext';

ReactDOM.render(
  <UserDetailsContextProvider>
    <App />
  </UserDetailsContextProvider>,
  document.getElementById('root')
);
