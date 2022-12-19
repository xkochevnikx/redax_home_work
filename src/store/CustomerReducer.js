const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const DELETE_CUSTOMERS = "DELETE_CUSTOMERS";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";

export function customerReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.payload] };
    case "DELETE_CUSTOMERS":
      return {
        ...state,
        customers: state.customers.filter(
          customer => customer.id !== action.payload
        ),
      };
    case "ADD_MANY_CUSTOMERS":
      return { ...state, customers: [...state.customers, ...action.payload] };
    default:
      return state;
  }
}

export function addCustomerAction(payload) {
  return { type: ADD_CUSTOMER, payload };
}
export function deleteCustomerAction(payload) {
  return { type: DELETE_CUSTOMERS, payload };
}
export function addManyCustomersAction(payload) {
  return { type: ADD_MANY_CUSTOMERS, payload };
}
