import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {RTCContextAPI} from "./config/contextAPI"


ReactDOM.render(
  <React.StrictMode>
    <RTCContextAPI>
    <App />
    </RTCContextAPI>
  </React.StrictMode>,
  document.getElementById('root')
);


