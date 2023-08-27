import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <ul className={css.list}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
            </ul>
            <div className={css.total_wrap}>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
            </div>
        </div>
    );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};