import './ProgressBar.css';

const ProgressBar = ({ current, goal = 20000 }) => {
    const percentage = Math.min((current / goal) * 100, 100);

    return (
        <div className="progress-container">
            <h3 className="progress-title">Ежемесячная цель</h3>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: percentage > 80 ? '#ff6b6b' : '#6e45e2'
                    }}
                />
            </div>
            <div className="progress-labels">
                <span>₽ {current.toFixed(2)}</span>
                <span>Цель: ₽ {goal.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default ProgressBar;