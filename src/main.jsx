
import "./index.css";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { GlobalContext } from './context';
import GlobalContextProvider from './context/GlobalContext';

ReactDOM.createRoot(document.getElementById("root")).render(
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  );