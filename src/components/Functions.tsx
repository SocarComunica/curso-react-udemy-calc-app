import PropTypes from 'prop-types';
import Button from "./Button";

type FunctionsProps = {
    onContentClear: any;
    onDelete: any;
}
const Functions = ({onContentClear, onDelete}: FunctionsProps) => (
    <section className="functions">
        <Button typeButton="button-long-text" text="clear" clickHandler={onContentClear}/>
        <Button text="&larr;" clickHandler={onDelete}/>
    </section>
);

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions;