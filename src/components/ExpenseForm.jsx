import { useState } from "react";

function ExpenseForm({ addExpense, setBalance, setTotalExpense, expenses }) {
    const [expenseCategory, setExpenseCategory] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);

    const handleExpenseSubmit = (e) => {
        e.preventDefault();
        const amount = parseFloat(expenseAmount);
        const expense = { expenseCategory, amount, expenseDate };

        if (expenseCategory === "" || isNaN(amount) || amount <= 0 || expenseDate === "")  {
            alert('Please enter a valid data.');
            return null;
        } else {
            addExpense(expense);
        }

        setTotalExpense(totalExpenses  + amount);
        setBalance((prevBalance) => prevBalance - amount);
        setExpenseCategory('');
        setExpenseAmount('');
        setExpenseDate('');
    }

    return (
        <div className="relative py-5"> 
            <form className="text-center text-sm mx-auto" autoComplete="off">                    
                <select 
                    id="category" 
                    name="category" 
                    value={expenseCategory} 
                    onChange={(e) => setExpenseCategory(e.target.value)}
                    className="block w-80 bg-white mx-auto my-3 px-3 pt-1 pb-2 rounded focus:outline-none"
                >
                    <option value="">Select expense category</option>
                    <option value="Food">Food</option>
                    <option value="Housing">Housing</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Travel">Travel</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Others">Others</option>
                </select>
                <input
                    type="number"
                    name="exp_amount"
                    id="exp_amount"
                    step="1.25"
                    placeholder="Enter expense amount"
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    className="block w-80 bg-white mx-auto px-3 pt-1 pb-2 my-3 rounded focus:outline-none"
                    required
                />
                <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Enter the date"
                    value={expenseDate}
                    onChange={(e) => setExpenseDate(e.target.value)}
                    className="block w-80 bg-white mx-auto px-3 pt-1 pb-2 my-3 rounded focus:outline-none"
                    required
                />
                <button 
                    type="submit" 
                    onClick={handleExpenseSubmit}
                    aria-label="Add transaction"
                    className="w-80 bg-red-400 text-white px-3 pt-1 pb-2 rounded cursor-pointer font-[500]"
                >
                    Add Expense
                </button>
            </form>
        </div>
    );
}

export default ExpenseForm;