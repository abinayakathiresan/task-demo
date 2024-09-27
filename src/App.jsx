import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "./Components/Templates/Layout/Layout";
import "./custom.scss";
import LayoutNew from "./Components/Templates/LayoutNew/LayoutNew";

const App = () => {
  return (
    <BrowserRouter>
      <LayoutNew/>
    </BrowserRouter>
  );
}
export default App;
