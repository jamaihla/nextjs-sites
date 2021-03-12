import {useState} from 'react'
import Footer from "../../components/javascript-programs/Footer"
import styles from "../../styles/javascript.module.scss";

export default function Temperature() {

    const [result, setResult] = useState('');

    const tempCheck = (a) => {
        // Temp < 0 then Freezing weather
        // Temp 0-10 then Very Cold weather
        // Temp 11-20 then Cold weather
        // Temp 21-30 then Normal in Temp
        // Temp 31-40 then Its Hot
        // Temp >=40 then Its Very Hot
        // Test Data :
        // 42
        // Expected Output :
        // Its very hot.

        let x = parseInt(a);

        if ( x < 0 ) {
            setResult('Freezing weather.')
        } else if ( x < 11 ) {
            setResult('Very Cold weather.')
        } else if (x < 21 ) {
            setResult('Cold weather.')
        } else if (x < 31 ) {
            setResult('Normal in Temp.')
        } else if (x < 41 ) {
            setResult('It\'s Hot!')
        } else {
            setResult('It\'s Very Hot!')
        }
    }

    return(
        <div className={styles.js}>
        <div>
            <h1>Temperature Checker</h1>
            <div className={styles.inputField}>
            <label>Temperature (in centigrade):</label>
            <input type="number" placeholder="0" onChange={(e) => tempCheck(e.target.value)} />
            </div>
            <div className={styles.result}>
            <label>{result}</label>
            </div>
        </div>
        <Footer />
        </div>
    )
}