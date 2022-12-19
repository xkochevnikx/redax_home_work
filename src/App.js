import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncAction/Customers";
import { addCashAction, getCashAction } from "./store/CashReducer";
import {
  addCustomerAction,
  deleteCustomerAction,
} from "./store/CustomerReducer";

function App() {
  //? что бы изменять состояние компонента
  const dispatch = useDispatch();

  //? через отдельную функцию получаем сотояние и сохраняем в переменную
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  function addCash(cash) {
    dispatch(addCashAction(cash));
  }

  function getCash(cash) {
    dispatch(getCashAction(cash));
  }

  function addCustomer(name) {
    const customer = {
      name: name,
      id: Date.now(),
    };
    //? передаём в диспатч экшнкреэйтер и в парамерты экшн пэйлоад
    dispatch(addCustomerAction(customer));
  }

  function deleteCustomer(item) {
    dispatch(deleteCustomerAction(item.id));
  }

  return (
    <div className="app">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <div>{cash}</div>
          <button onClick={() => addCash(+prompt())}>пополнить счёт</button>
          <button onClick={() => getCash(Number(prompt()))}>
            снять со счёта
          </button>
          <button onClick={() => addCustomer(prompt())}>
            добавить клиента
          </button>
          <button onClick={() => dispatch(fetchCustomers())}>
            клиенты из базы
          </button>
        </div>
        <div>
          {customers ? (
            <div>
              {" "}
              {customers.map(item => (
                <div key={item.id} onClick={() => deleteCustomer(item)}>
                  {item.name}
                </div>
              ))}{" "}
            </div>
          ) : (
            <div> нет пользователей </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
