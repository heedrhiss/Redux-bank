import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, reqLoan, withdraw } from "./AccountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const {balance, loan, loanPurpose: curLoanPurpose, isLoading} = useSelector((store) => store.account)
  const dispatch = useDispatch();



  function handleDeposit() {
    if(!depositAmount) return
    dispatch(deposit(depositAmount, currency))
    setDepositAmount(depositAmount => "")
    setCurrency('USD');
  }

  function handleWithdrawal() {
    if(!withdrawalAmount) return
    if(withdrawalAmount> balance) return(alert(`Insufficient Balance you have only $${balance} left in you aza`))
    if(balance >= withdrawalAmount) dispatch(withdraw(withdrawalAmount))
    setWithdrawalAmount(withdraw => "")
  }

  function handleRequestLoan() {
    if(!loanAmount || !loanPurpose) return
    if(loanAmount > 0) dispatch(reqLoan(loanAmount, loanPurpose))
    setLoanAmount(loanAmount => "")
    setLoanPurpose(lp => "")
  }

  function handlePayLoan() {
    if(loan > balance) return(alert("Thief, Oni jibiti ni iwo"))
    if(balance > loan)dispatch(payLoan())
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={isLoading}>{isLoading ? 'Converting...' : `Deposit ${depositAmount}`}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {loan && <div>
          <span>Pay back ${loan} - {curLoanPurpose}</span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>}
      </div>
    </div>
  );
}

export default AccountOperations;
