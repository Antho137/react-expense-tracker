function ExpenseTracker({ balance, income, totalExpense }) {

    return (
        <div className="relative pt-20 w-80 mx-auto">
            <div className="bg-white text-center px-5 py-2 mb-4 rounded">
                <h3 className="text-2xl text-blue-500">Balance</h3>
                <span className={balance.toFixed(2) > 0 ? "text-green-500 text-xl font-medium" : "text-red-500 text-xl font-medium"}>${balance.toFixed(2)}</span>
            </div>
            <div className="w-80 grid grid-cols-2 gap-3 mx-auto">
                <div className="bg-green-500 text-white text-center px-5 py-2 rounded">
                    <h3 className=" text-xl">Income</h3>
                    <span className="">${income.toFixed(2)}</span>
                </div>
                <div className="bg-red-400 text-white text-center px-5 py-2 rounded">
                    <h3 className=" text-xl">Expenses</h3>
                    <span className="">${totalExpense.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}

export default ExpenseTracker;