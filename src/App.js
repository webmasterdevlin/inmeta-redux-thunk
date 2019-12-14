import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from 'react-router-dom'
import RootRouter from './root-router'
function App() {
  return (
     <BrowserRouter>
        <>
          <div className="container">
            <RootRouter />
          </div>
        </>
     </BrowserRouter>
  );
}

export default App;
