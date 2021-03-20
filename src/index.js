import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './comps/App';
import App2 from './components/App'
import reportWebVitals from './reportWebVitals';
import DealCard from './components/DealCard';
import MainWS from './components/MainWS'
import ActiveDealsListing from './components/ActiveDealsListing';
import ReactSockJsClient from './components/ReactSockJsClient';
import SockClientApp from './components/SockClientApp'

ReactDOM.render(
  <React.StrictMode>
    {/* <ReactSockJsClient /> */}
    {/* <App2 /> */}
    {/* <SockClientApp /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
