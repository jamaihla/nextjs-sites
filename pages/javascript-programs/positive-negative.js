import { useState } from "react";
import Footer from "../../components/javascript-programs/Footer"
import styles from "../../styles/javascript.module.scss";

export default function PositiveNegative(){

    const [x, setX] = useState(0);
    const [result, setResult] = useState('');

    const positiveNegative = (n) => {
    
        if(parseInt(n) < 0){
          setResult(n + ' is a negative number');
        } else if (parseInt(n) === 0){
          setResult(n + ' is neither positive nor negative');
        } else {
          setResult(n + ' is a positive number');
        }
    
      };

    return(
        <div className={styles.js}>
          <div>
            <h1>Positive or Negative?</h1>
            <div className={styles.inputField}>
              <label>Enter number</label>
              <input type="number" placeholder="0" onChange={(e) => positiveNegative(e.target.value)} />
            </div>

            <div className={styles.result}>
              <label> {result}</label>
            </div>
          </div>
          <Footer />
      </div>
    )
}