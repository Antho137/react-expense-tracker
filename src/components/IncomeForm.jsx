import { useState } from "react";

function IncomeForm({ setIncome, setBalance }) {
    const [incomeAmount, setIncomeAmount] = useState(''); 

    const handleChange = (e) => {
        setIncomeAmount(e.target.value);
    }

    const handleIncomeSubmit = (e) => {
        e.preventDefault();
        const amount = parseFloat(incomeAmount);
        
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a positive number.');
            return;
        }

        if (amount > 0) {
            setIncome((prevIncome) => prevIncome + amount);
        } 
        setBalance((prevBalance) => prevBalance + amount);
        
        setIncomeAmount('');
    }

    return (
        <div className="relative py-3">
            <form className="text-center text-sm mx-auto mt-7" autoComplete="off">
                <div className="flex justify-center items-center">
                    <input
                        type="number"
                        name="inc_amount"
                        id="inc_amount"
                        step="1.25"
                        placeholder="Enter income amount"
                        value={incomeAmount}
                        onChange={handleChange}
                        className="w-53 bg-white px-3 pt-1 pb-2 rounded focus:outline-none"
                        required
                    />
                    <button 
                        type="submit" 
                        onClick={handleIncomeSubmit}
                        aria-label="Add transaction"
                        className="bg-green-500 text-white px-3 pt-1 pb-2 rounded cursor-pointer font-[500]"
                    >
                        Add Income
                    </button>
                </div>
            </form>
        </div>
    );
}

export default IncomeForm;