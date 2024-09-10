import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {

  const [inputNumber, setInputNumber] = useState<number>(0);

  const [message, setMessage] = useState<string>("");

  const calculateFibonacci = (num: number): number[] => {
    let fibSequence: number[] = [0, 1];
    let nextFib: number = 1;

    while (nextFib <= num) {
      nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
      fibSequence.push(nextFib);
    }

    return fibSequence;
  };

  const checkIfFibonacci = (num: number): void => {
    const fibSequence = calculateFibonacci(num);

    if (fibSequence.includes(num)) {
      setMessage(`${num} pertence à sequência de Fibonacci.`);
    } else {
      setMessage(`${num} não pertence à sequência de Fibonacci.`);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    checkIfFibonacci(inputNumber);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Verificador de Fibonacci</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputNumber}
          onChange={(e) => setInputNumber(Number(e.target.value))}
          placeholder="Informe um número"
          required
        />
        <button type="submit">Verificar</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default App;
