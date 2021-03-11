import { useState } from "react";
// import Tests from "../../components/javascript-exercises/Tests";
import styles from "../../styles/javascript.module.scss";

export default function AddNumbers() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [result, setResult] = useState(0);

  const addTwoNumbers = (n, m) => {
    let result = parseInt(n) + parseInt(m);
    setResult(result);
  };

  return (
    <div className={styles.js}>
      <div>
        <h1>Get the sum of two numbers</h1>
        <div className="flex">
          <label>First Value</label>
          <input type="number" onChange={(e) => setX(e.target.value)}></input>
        </div>

        <div className="flex">
          <label>Second Value</label>
          <input
            id="x"
            type="number"
            onChange={(e) => setY(e.target.value)}
          ></input>
        </div>

        <div className="flex">
          <div>
            <button onClick={() => addTwoNumbers(x, y)}>Add</button>
          </div>
          <label>Total:{result}</label>
        </div>
      </div>
    </div>
  );
}