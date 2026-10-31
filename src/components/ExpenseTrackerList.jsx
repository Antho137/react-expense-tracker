function ExpenseTrackerList({ expenses }) {
    
    return (
        <div className="relative text-center mx-auto pt-3 pb-10">
            <h2 className="text-2xl text-red-500 mb-3">Expenses Table</h2>
            <table className="w-80 bg-white border-1 p-5 mx-auto">
                <thead>
                    <tr className="text-sm">
                        <th className="border-1 px-2 pb-1 font-medium">Nº</th>
                        <th className="border-1 px-2 pb-1 font-medium">Category</th>
                        <th className="border-1 px-2 pb-1 font-[500]">Amount</th>
                        <th className="border-1 px-2 pb-1 font-[500]">Date</th>         
                    </tr>
                </thead>
                <tbody>           
                    {expenses.map((expense, index) => (
                        <tr key={index} className="text-sm">
                            <td className="text-left border-1 px-1.5 pb-1">{index + 1}</td>
                            <td className="text-left border-1 px-1.5 pb-1">{expense.expenseCategory}</td>
                            <td className="text-right border-1 px-2 pb-1">${expense.amount.toFixed(2)}</td>
                            <td className="text-center border-1 px-1.5 pb-1">{expense.expenseDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseTrackerList;