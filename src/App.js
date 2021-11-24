import './App.css';

function App() {
  return (
    <div className="container">
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-output">45 +</div>
          <div className="current-output">69</div>
        </div>
        <div className="calc-button calc-large-button">AC</div>
        <div className="calc-button">DEL</div>
        <div className="calc-button">/</div>
        <div className="calc-button">1</div>
        <div className="calc-button">2</div>
        <div className="calc-button">3</div>
        <div className="calc-button">*</div>
        <div className="calc-button">4</div>
        <div className="calc-button">5</div>
        <div className="calc-button">6</div>
        <div className="calc-button">+</div>
        <div className="calc-button">7</div>
        <div className="calc-button">8</div>
        <div className="calc-button">9</div>
        <div className="calc-button">-</div>
        <div className="calc-button">.</div>
        <div className="calc-button">0</div>
        <div className="calc-button calc-large-button">=</div>
      </div>
    </div>
  );
}

export default App;
