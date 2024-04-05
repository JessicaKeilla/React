import { useState } from 'react';
import './ ExpenseForm.css';


const ExpenseForm = ({ onAddExpense }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Еда');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description || !amount) return;

        const newExpense = {
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            category,
            date: new Date().toISOString()
        };

        onAddExpense(newExpense);
        setDescription('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} className="expense-form">
            <div className="form-group">
                <label>Описание</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Сколько вы потратили??"
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label>Сумма (₽)</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label>Категория</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-select"
                >
                    <option value="Еда">Еда</option>
                    <option value="transporte">Транспорт</option>
                    <option value="lazer">Досуг</option>
                    <option value="Жилье">Жилье</option>
                    <option value="Другое">Другое</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">
                Добавить расходы
            </button>
        </form>
    );
};

export default ExpenseForm;