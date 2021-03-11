import { useState } from "react";
import styles from "../../styles/javascript.module.scss";

export default function EvenOdd() {
  const [x, setX] = useState(0);
  const [result, setResult] = useState();

  const evenOdd = (n) => {
    let num = parseInt(n);
    
    if(num % 2 === 0){
      setResult(num + ' is an even integer.');    
    } else {
      setResult(num + ' is an odd integer.')
    }
    
  };

  return (
    <div className={styles.js}>
      <div>
        <h1>Even or Odd</h1>
        <div className="flex">
          <label>Enter number</label>
          <input type="number" placeholder="0" onChange={(e) => evenOdd(e.target.value)}></input>
        </div>
        <div className="flex">
          <label>{result}</label>
        </div>
      </div>
    </div>
  );
}