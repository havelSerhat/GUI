import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {RTCProvider} from "./config/contextAPI"


ReactDOM.render(
  <React.StrictMode>
    <RTCProvider>
    <App />
    </RTCProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


