import calcActions from '../actions/calcActions';

const DigitButtonComponent = ({ dispatch, digit, styling }) => {
    return (
        <div className={styling} onClick={() => {dispatch(calcActions.addDigitAction(digit))}}>{digit}</div>
    )
}

export default DigitButtonComponent;