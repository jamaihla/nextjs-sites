import {useState} from "react";
import Footer from "../../components/javascript-programs/Footer"
import styles from "../../styles/javascript.module.scss";

export default function LargerThanZero() {

    const [result, setResult] = useState('');

    const valueOfN = (m) => {
        let n;
        if (parseInt(m) > 0) {
            n = 1;
            setResult('Value of n = ' + n);
        } else if (parseInt(m) === 0) {
            n = 0;
            setResult('Value of n = ' + n);
        } else {
            n = -1;
            setResult('Value of n = ' + n);
        }
    }

    return (
        <div className={styles.js}>
            <div>
                <h1>Larger or less than zero</h1>
                <div className={styles.inputField}>
                <label>Value of integer m:</label>
                <input type="number" placeholder="0" onChange={(e) => valueOfN(e.target.value)} />
                </div>

                <div className={styles.result}>
                <label>{result}</label>
                </div>
            </div>
            <Footer />
        </div>
    )
}