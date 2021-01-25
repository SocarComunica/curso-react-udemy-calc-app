import PropTypes from 'prop-types';

import './Button.css';

type ButtonProps = {
    clickHandler: any;
    text: string;
    typeButton?: string;
}

const Button = ({typeButton, text, clickHandler}: ButtonProps) => (
    <button className={typeButton} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
);

Button.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    typeButton: PropTypes.string
};

export default Button;