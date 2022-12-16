import { useDispatch, useSelector } from "react-redux";

function App() {
  //? что бы изменять состояние компонента
  const dispatch = useDispatch();
  //? через отдельную функцию получаем сотояние и сохраняем в переменную
  const cash = useSelector(state => state.cash);

  function addCash(cash) {
    dispatch({ type: "ADD_CASH", payload: cash });
  }

  function getCash(cash) {
    dispatch({ type: "GET_CASH", payload: cash });
  }
  return (
    <div className="app">
      <div style={{ display: "flex" }}>
        <div>{cash}</div>
        <button onClick={() => addCash(+prompt())}>пополнить счёт</button>
        <button onClick={() => getCash(Number(prompt()))}>
          снять со счёта
        </button>
      </div>
    </div>
  );
}

export default App;
