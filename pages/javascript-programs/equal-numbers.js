import { useState } from "react";
import Footer from "../../components/javascript-programs/Footer"
import styles from "../../styles/javascript.module.scss";

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
    <div className={styles.js}>
      <div>
      <h1>Equal numbers</h1>
      <div className={styles.inputField}>
        <label>First Value</label>
        <input type="number" placeholder="0" onChange={(e) => setX(e.target.value)} />
      </div>
      <div className={styles.inputField}>
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
          <button className={styles.button} onClick={() => equalNumbers(x, y)}>Check</button>
        </div>
        <div className={styles.result}>
          <label>{result}</label>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}