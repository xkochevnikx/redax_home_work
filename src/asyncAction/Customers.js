import { addManyCustomersAction } from "../store/CustomerReducer";

//? redux thunk это middleware который позволяет вызывать диспатч внутри сторонних функций
export function fetchCustomers() {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => dispatch(addManyCustomersAction(json)));
  };
}
