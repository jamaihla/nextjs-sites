import { useState } from "react";

export default function EqualNumbers() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [result, setResult] = useState('');

  const equalNumbers = (n, m) => {
    
    if(parseInt(n) === parseInt(m)){
      setResult(n + ' and ' + m + ' are equal.');
    } else {
      setResult(n + ' and ' + m + ' are not equal.');
    }

  };

  return (
      <div>
        <h1>Equal numbers</h1>
        <div className="flex">
          <label>First Value</label>
          <input type="number" placeholder="0" onChange={(e) => setX(e.target.value)} />
        </div>
        <div className="flex">
          <label>Second Value</label>
          <input
            id="x"
            type="number"
            placeholder="0"
            onChange={(e) => setY(e.target.value)}
          />
        </div>

        <div className="">
          <div>
            <button onClick={() => equalNumbers(x, y)}>Check</button>
          </div>
          <div>
            <label>{result}</label>
          </div>
        </div>
      </div>
  );
}