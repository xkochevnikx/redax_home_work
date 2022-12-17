import { combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cashReducer } from "./CashReducer";
import { customerReducer } from "./CustomerReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

//? тут экспортируем переменную в которую с помощью функции combineReducers поместили два редюсера. потом она импортируется в индексе и передаётся с помощью провайдера в реакт компоненты
export const store = createStore(rootReducer, composeWithDevTools());
