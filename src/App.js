import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const customer = useSelector(store=> store.customerReducer.fullName)

  return (
    <div>
      <h1>🏦 Redux Bank of Heedrhiss ⚛️</h1>
      {!customer ? <CreateCustomer /> :
      <>
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
      </>}
    </div>
  );
}

export default App;
