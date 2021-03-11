import {useState} from "react";
import styles from "../../styles/javascript.module.scss";

export default function ThreeNumbers() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [result, setResult] = useState('');

    const threeNumbers = (a, b, c) => {
        let num1 = parseInt(a);
        let num2 = parseInt(b);
        let num3 = parseInt(c);
        let largest = 0;

        if (num1 > num2 && num1 > num3) {
            largest = num1;
            setResult('The first number is the largest');
        } else if (num2 > num1 && num2 > num3) {
            largest = num2;
            setResult('The second number is the largest');
        } else if (num3 > num1 && num3 > num2) {
            largest = num3;
            setResult('The third number is the largest');
        }

    }

    return(
        <div className={styles.js}>
        <div>
            <h1>Largest Number</h1>
            <div className="flex">
            <label>First number:</label>
            <input type="number" placeholder="0" onChange={(e) => setNum1(e.target.value)} />
            </div>

            <div className="flex">
            <label>Second number:</label>
            <input type="number" placeholder="0" onChange={(e) => setNum2(e.target.value)} />
            </div>

            <div className="flex">
            <label>Third number:</label>
            <input type="number" placeholder="0" onChange={(e) => setNum3(e.target.value)} />
            </div>

            <div className="flex">
            <button className={styles.button} onClick={() => threeNumbers(num1, num2, num3)}>Check</button>
            </div>
            <div>
            <label> {result}</label>
            </div>
        </div>
        </div>
    )
}