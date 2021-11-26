import calcActions from "../actions/calcActions";

const OperationButton = ({ dispatch, operation, styling }) => {
    let requiredOperation;
    switch(operation) {
        case 'AC':
            requiredOperation = calcActions.clearAction;
            break;
        case '+':
        case '-':
        case '/':    
        case '*':
            requiredOperation = calcActions.arithmeticAction;
            break;
        case '=':
            requiredOperation = calcActions.equalAction;
            break;
        case 'DEL':
            requiredOperation = calcActions.deleteAction;
            break;
        default:
            break;

    }

    return (
        <div className={styling} onClick={() => dispatch(requiredOperation(operation))}>{operation}</div>
    )
}

export default OperationButton;
