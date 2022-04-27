import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import App from './App';
import "animate.css";
import "aos/dist/aos.css";
import ScrollToTop from './components/ScrollToTop';
import "./components/Para" 

ReactDOM.render(
<React.StrictMode>
  <HashRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <App />
  </ HashRouter>,
  </React.StrictMode>,

  document.getElementById("root")
); 
