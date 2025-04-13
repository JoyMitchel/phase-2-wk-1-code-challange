import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <SearchBar onSearch={setSearch} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
};

export default App;


