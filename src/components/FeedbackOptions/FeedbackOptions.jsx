import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const oprionsArray = Object.entries(options);
    return (
        <div className={css.container_btns}>
            {
                oprionsArray.map(option => (
                    <button type='button' key={option[0]} className={css.btn}
                        onClick={() => onLeaveFeedback(option[0])}>{option[0]}</button>
                ))
            }
            
        </div>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};