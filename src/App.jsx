import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary/ExpenseSummary';
import ProgressBar from './components/ProgressBar/ProgressBar';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import './App.css';

function App () {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const filteredExpenses = filter === 'all'
      ? expenses
      : expenses.filter(expense => expense.category === filter);

  return (
      <div className="app-container">
        <header className="app-header">
          <h1>Трекер расходов</h1>
          <p>Контролируйте свои расходы простым и элегантным способом</p>
        </header>

        <main className="app-main">
          <ExpenseForm onAddExpense={handleAddExpense} />

          <ProgressBar current={filteredExpenses.reduce((sum, e) => sum + e.amount, 0)} goal={2000} />

          <CategoryFilter value={filter} onChange={setFilter} />

          <ExpenseSummary expenses={filteredExpenses} />

          <ExpenseList
              expenses={filteredExpenses}
              onDelete={handleDeleteExpense}
          />
        </main>
      </div>
  )
}

export default App;