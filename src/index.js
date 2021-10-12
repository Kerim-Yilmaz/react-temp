import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import 'react-toastify/dist/ReactToastify.css';
import './app/scss/style.scss';
import { icons } from './app/assets/icons'
React.icons = icons



//import './assets/css/bootstrap.min.css'
//import './assets/css/demo.css'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

