import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  return <Navbar />;
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

