import PropTypes from "prop-types";

const Feedback = ({ feedback }) => {
    return (
        <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
        </div>
    );
};

Feedback.propTypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
};

export default Feedback;