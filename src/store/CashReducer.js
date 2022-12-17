//? это как раньше делали инитстейт только в данном упражнении чуть по другому
const defaultState = {
  cash: 0,
};

const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";

//? редюсер принимает сотояние и экшн и всегда возвращает новое сотояние
export function cashReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
}

export function addCashAction(payload) {
  return { type: ADD_CASH, payload };
}
export function getCashAction(payload) {
  return { type: GET_CASH, payload };
}
