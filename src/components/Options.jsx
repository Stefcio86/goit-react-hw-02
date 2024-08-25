import PropTypes from "prop-types";

const Options = ({ onLeaveFeedback }) => {
    return (
        <div>
            <button onClick={() => onLeaveFeedback("good")}>Good</button>
            <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
            <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
        </div>
    );
};

Options.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default Options;
