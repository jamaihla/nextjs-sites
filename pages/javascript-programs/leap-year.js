import {useState} from "react";
import Footer from "../../components/javascript-programs/Footer"
import styles from "../../styles/javascript.module.scss";

export default function LeapYear() {
    const [x, setX] = useState(0);
    const [result, setResult] = useState('');

    const leapYear = (n) => {

        if ((parseInt(n) % 4) === 0) {
            setResult(n + ' is a leap year.')
        } else {
            setResult(n + ' is not a leap year.')
        }

    }

    return(
        <div className={styles.js}>
        <div>
            <h1>Leap Year Check</h1>
            <div className={styles.inputField}>
            <label>Year:</label>
            <input type="number" placeholder="0" onChange={(e) => leapYear(e.target.value)} />
            </div>

            <div className={styles.result}>
            <label> {result}</label>
            </div>
        </div>
        <Footer />
        </div>
    )
}