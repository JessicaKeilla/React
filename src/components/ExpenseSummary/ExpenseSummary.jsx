import './ExpenseSummary.css';

const ExpenseSummary = ({ expenses }) => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div className="summary-card">
            <h2>Общие расходы</h2>
            <p className="summary-total">₽ {total.toFixed(2)}</p>
            <div className="summary-count">
                {expenses.length} {expenses.length === 1 ? 'зарегистрированные расходы' : 'зарегистрированные расходы'}
            </div>
        </div>
    );
};

export default ExpenseSummary;