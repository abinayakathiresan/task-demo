import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "./State/store";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store = {store}>
      <div>
        <Layout/>
      </div>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
