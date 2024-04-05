import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onDelete }) => {
    return (
        <div className="expense-list">
            <h2 className="expense-list-title">Ваши расходы</h2>
            {expenses.length === 0 ? (
                <p className="expense-list-empty">Расходы пока не зафиксированы.</p>
            ) : (
                expenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                        onDelete={onDelete}
                    />
                ))
            )}
        </div>
    );
};

export default ExpenseList;