import PropTypes from 'prop-types';
import Button from "./Button";

const renderButtons = (onClickNumber: any): any => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return numbers.map((number) => (
        <Button key={number}
                clickHandler={onClickNumber}
                text={number.toString()} />
    ));
}

type NumberProps = {
    onClickNumber: any;
}
const Numbers = ({onClickNumber}: NumberProps) => (
    <section className="numbers">
        {renderButtons(onClickNumber)}
    </section>
);

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
};

export default Numbers;