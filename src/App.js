import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from 'react-router-dom';
import RootRouter from './root-router';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={}>
      <BrowserRouter>
          <>
            <div className="container">
              <RootRouter />
            </div>
          </>
      </BrowserRouter>
     </Provider>
  );
}

export default App;
