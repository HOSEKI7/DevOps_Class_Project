// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "./index.css";
import DarkModeContextProvider from "./context/darkMode_tmp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
