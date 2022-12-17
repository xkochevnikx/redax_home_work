import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

//? из модуля редакс получам провайдёр в который оборачиваем App и в параметры он принимает стор что бы прокидывать в компоненты состояние
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
