import actionTypes from "../actions/actionTypes";
import intialState from "./intialState";

const evaluate = (prev, curr, operation) => {
    let num1 = Number(prev);
    let num2 = Number(curr);
    switch(operation) {
        case '+':
            return ''+(num1 + num2);
        case '-':
            return ''+(num1 - num2);
        case '/':
            return ''+(num1 / num2).toFixed(2);
        case '*':
            return ''+(num1 * num2);
        default:
            return prev;
    }
}

const operation = (state, operationSign) => {
    if(operationSign === 'AC') return intialState;
    if(state.prevNumber === '') {
        return { prevNumber: state.currentNumber, prevOperation: operationSign, currentNumber: '' };
    }
    else {
        return (
            {
                prevNumber: evaluate(state.prevNumber, state.currentNumber, state.prevOperation),
                prevOperation: operationSign, 
                currentNumber: ''
            }
        )
    }
}

const calcReducer = (state, { type, payload }) => {
    switch(type) {
        case actionTypes.ADD_DIGIT:
            let newCurrentNumber = state.currentNumber;
            if(payload === '.' ) {
                if(!state.currentNumber) {
                    newCurrentNumber = `0${payload}`;
                }
                else if(!state.currentNumber.includes('.')) {
                    newCurrentNumber += '.';
                }
            }
            else if(payload === 0 && newCurrentNumber === "0") {
                //console.log('multiple zeroes are useless');
            }
            else if(payload !== 0 && newCurrentNumber === "0") {
                newCurrentNumber = `${payload}`;
            }
            else {
                newCurrentNumber = `${newCurrentNumber}${payload}`;
            }
            return {...state, currentNumber: newCurrentNumber};

        case actionTypes.CLEAR:
            return operation(state, 'AC');

        case actionTypes.ARITHMETIC:
            return operation(state, payload);

        case actionTypes.EQUAL:
            if(!state.prevNumber) return state;
            else {
                if(!state.currentNumber) {
                    return {prevNumber: '', prevOperation: '', currentNumber: state.prevNumber};
                }
                else {
                    return {
                        prevNumber: '', 
                        prevOperation: '', 
                        currentNumber: evaluate(state.prevNumber, state.currentNumber, state.prevOperation)
                    };
                }
            }

        case actionTypes.DELETE:
            if(!state.currentNumber && !state.prevNumber) return state;
            else if(state.currentNumber) {
                return {prevNumber: state.prevNumber, prevOperation: state.prevOperation, currentNumber: state.currentNumber.substr(0, state.currentNumber.length - 1)};
            }
            else {
                return {prevNumber: '', prevOperation: '', currentNumber: state.prevNumber};
            }

        default:
            return state;
    }
}

export default calcReducer;