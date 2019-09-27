import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reminders from './reducers';
import App from './App';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss'

const store = createStore(
   reminders,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<Provider store={ store }>
   <App />
</Provider>
, document.getElementById('root'));