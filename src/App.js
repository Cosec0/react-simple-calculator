import { useReducer } from 'react';

import './App.css';
import DigitButtonComponent from './components/DigitButtonComponent';
import OperationButton from './components/OperationButton';

import calcReducer from './reducers/calcReducer';
import initialState from './reducers/intialState';


const App = () => {
  const [{ prevNumber, prevOperation, currentNumber }, calcDispatch] = useReducer(calcReducer, initialState);

  return (
    <div className="container">
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-output">{prevNumber} {prevOperation}</div>
          <div className="current-output">{currentNumber}</div>
        </div>
        <OperationButton operation="AC" dispatch={calcDispatch} styling="calc-button calc-large-button"/>
        <OperationButton operation="DEL" dispatch={calcDispatch} styling="calc-button"/>
        <OperationButton operation="/" dispatch={calcDispatch} styling="calc-button"/>

        <DigitButtonComponent digit={1} dispatch={calcDispatch} styling="calc-button"/>
        <DigitButtonComponent digit={2} dispatch={calcDispatch} styling="calc-button"/>
        <DigitButtonComponent digit={3} dispatch={calcDispatch} styling="calc-button"/>

        <OperationButton operation="*" dispatch={calcDispatch} styling="calc-button"/>

        <DigitButtonComponent digit={4} dispatch={calcDispatch} styling="calc-button"/>
        <DigitButtonComponent digit={5} dispatch={calcDispatch} styling="calc-button"/>
        <DigitButtonComponent digit={6} dispatch={calcDispatch} styling="calc-button"/>

        <OperationButton operation="+" dispatch={calcDispatch} styling="calc-button"/>

        <DigitButtonComponent digit={7} dispatch={calcDispatch} styling="calc-button"/>
        <DigitButtonComponent digit={8} dispatch={calcDispatch} styling="calc-button"/>
        <DigitButtonComponent digit={9} dispatch={calcDispatch} styling="calc-button"/>

        <OperationButton operation="-" dispatch={calcDispatch} styling="calc-button"/>

        <DigitButtonComponent digit={'.'} dispatch={calcDispatch} styling="calc-button"/>
        <DigitButtonComponent digit={0} dispatch={calcDispatch} styling="calc-button"/>
        <OperationButton operation="=" dispatch={calcDispatch} styling="calc-button calc-large-button"/>
      </div>
    </div>
  );
}

export default App;
