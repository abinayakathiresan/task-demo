import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ManageTask from "./Components/ManageTask/ManageTask.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ManageTask />
  </React.StrictMode>,
);
