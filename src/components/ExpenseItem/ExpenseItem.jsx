import { FaTrash } from 'react-icons/fa';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, onDelete }) => {
    const getCategoryStyle = (category) => {
        const styles = {
            еда: { bg: '#ffd6a5', text: '#8a5a44' },
            транспорт: { bg: '#a0e7e5', text: '#0b7e78' },
            досуг: { bg: '#b5ead7', text: '#1a936f' },
            жилье : { bg: '#ff9aa2', text: '#c9184a' },
            другие: { bg: '#c7ceea', text: '#414a69' },
        };
        return styles[category] || { bg: '#e0e0e0', text: '#666' };
    };

    const categoryStyle = getCategoryStyle(expense.category);

    return (
        <div className="expense-card">
            <div>
                <h3>{expense.description}</h3>
                <div className="expense-meta">
          <span
              className="expense-category"
              style={{
                  backgroundColor: categoryStyle.bg,
                  color: categoryStyle.text
              }}
          >
            {expense.category}
          </span>
                    <span className="expense-date">
            {new Date(expense.date).toLocaleDateString()}
          </span>
                </div>
            </div>
            <div className="expense-actions">
                <span className="expense-amount">₽ {expense.amount.toFixed(2)}</span>
                <button
                    onClick={() => onDelete(expense.id)}
                    className="delete-btn"
                    aria-label="Delete"
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default ExpenseItem;