import { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const handleChange = (submit) => {
    setFormData({
      ...formData,
      [submit.target.name]: submit.target.value
    });
  };

  const handleSubmit = (submit) => {
    submit.preventDefault();
    onAddExpense(formData);
    setFormData({ description: '', amount: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        name="amount"
        placeholder="Amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

