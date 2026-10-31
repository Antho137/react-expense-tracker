import { useState } from "react";
import Header from "./components/Header";
import ExpenseTracker from "./components/ExpenseTracker";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTrackerList from "./components/ExpenseTrackerList";

function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };  

  return (
    <div className='bg-[#f5f5f5] w-screen min-h-dvh'>
      <Header />
      <div className='w-90 bg-blue-200 mx-auto '>
        <ExpenseTracker
          balance={balance}
          income={income}
          totalExpense={totalExpense}
        />
        <IncomeForm
          setBalance={setBalance}
          setIncome={setIncome}
        />
        <ExpenseForm
          addExpense={addExpense}
          setBalance={setBalance}
          setTotalExpense={setTotalExpense}
          expenses={expenses}
        />
        <ExpenseTrackerList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
