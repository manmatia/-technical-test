import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../src/redux/Store.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


