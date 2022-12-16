import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

//? это как раньше делали инитстейт только в данном упражнении чуть по другому
const defaultState = {
  cash: 0,
};

//? редюсер принимает сотояние и экшн и всегда возвращает новое сотояние
function reducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
}

//? редюсер инициализируется и передаётся в переменную а она потом передаётся с помощью провайдера в реакт компоненты
let store = createStore(reducer);
//? из модуля редакс получам провайдёр в который оборачиваем App и в параметры он принимает стор что юы прокидывать в компоненты состояние
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
