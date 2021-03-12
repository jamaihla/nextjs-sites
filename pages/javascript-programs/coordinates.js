import {useState} from 'react'
import Footer from "../../components/javascript-programs/Footer"
import styles from '../../styles/javascript.module.scss'

export default function Coordinates() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState('');

    const checkCoordinate = (x, y) => {
        let pointX = parseInt(x);
        let pointY = parseInt(y);

        if (pointX > 0 && pointY > 0) {
            setResult('The coordinate points (' + pointX + ', ' + pointY + ') lie on the First quadrant.')
        } else if (pointX < 0 && pointY > 0) {
            setResult('The coordinate points (' + pointX + ', ' + pointY + ') lie on the Second quadrant.')
        } else if (pointX < 0 && pointY < 0) {
            setResult('The coordinate points (' + pointX + ', ' + pointY + ') lie on the Third quadrant.')
        } else if (pointX > 0 && pointY < 0) {
            setResult('The coordinate points (' + pointX + ', ' + pointY + ') lie on the Fourth quadrant.')
        }
    }

    return (
        <div className={styles.js}>
        <div>
            <h1>Check Quadrant</h1>
            <div className={styles.inputField}>
            <label>X coordinate:</label>
            <input type="number" placeholder="0" onChange={(e) => setNum1(e.target.value)} />
            </div>

            <div className={styles.inputField}>
            <label>Y coordinate:</label>
            <input type="number" placeholder="0" onChange={(e) => setNum2(e.target.value)} />
            </div>

            <div className="flex">
            <button className={styles.button} onClick={() => checkCoordinate(num1, num2)}>Check</button>
            </div>
            <div className={styles.result}>
            <label> {result}</label>
            </div>
        </div>
        <Footer />
        </div>
    )
}