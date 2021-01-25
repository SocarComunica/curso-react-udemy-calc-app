import PropTypes from 'prop-types';

type ResultProps = { value: string };
const Result = ({ value }: ResultProps) => (
    <section className="result">
        <span>{value}</span>
    </section>
);

Result.propTypes = {
    value: PropTypes.string.isRequired
};

Result.defaultProps = {
    value: "0"
}

export default Result;
