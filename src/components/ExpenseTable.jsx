import React from 'react'

const ExpenseTable = () => {
  return (
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount ($)</th>
                <th>Category</th>
                {onDelete && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  {onDelete && (
                    <td>
                      <button onClick={() => onDelete(index)}>Delete</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        );
      }    

export default ExpenseTable