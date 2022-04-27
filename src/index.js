import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "animate.css";
import "aos/dist/aos.css";
import ScrollToTop from './components/ScrollToTop';
import "./components/Para" 

ReactDOM.render(
<React.StrictMode>
  <BrowserRouter>
      <ScrollToTop />
       
      <App />
  </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
); 
