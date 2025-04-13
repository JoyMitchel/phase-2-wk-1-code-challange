import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search.toLowerCase()) ||
    expense.category.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <SearchBar onSearch={setSearch} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;

