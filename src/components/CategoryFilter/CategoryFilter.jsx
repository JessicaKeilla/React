import './CategoryFilter.css';

const CategoryFilter = ({ value, onChange }) => {
    return (
        <div className="filter-container">
            <label className="filter-label">Фильтр по категории</label>
            <select
                id="filter"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="filter-select"
            >
                <option value="all">Все категории</option>
                <option value="Еда">Еда</option>
                <option value="transporte">Транспорт</option>
                <option value="lazer">Досуг</option>
                <option value="Жилье">Жилье</option>
                <option value="Другое">Другое</option>
            </select>
        </div>
    );
};

export default CategoryFilter;