function ExpenseTable({ expenses }) {
    return (
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No expenses yet 
              </td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  