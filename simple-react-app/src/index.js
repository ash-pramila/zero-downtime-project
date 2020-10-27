import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Homepage from './js/modules/employeeList/components/homePage';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from './js/store/storeConfigure'

ReactDOM.render(
  <Provider store={store}>
    <Homepage/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
