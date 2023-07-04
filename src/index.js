import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n.js";
import Loading from "./pages/Loading/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback=<Loading />>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
