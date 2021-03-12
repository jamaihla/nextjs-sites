import {useState} from "react";
import Footer from "../../components/javascript-programs/Footer"
import styles from "../../styles/javascript.module.scss";

export default function Candidate() {

    const [x, setX] = useState(0);
    const [result, setResult] = useState('');

    const candidate = (age) => {
        if (parseInt(age) >= 21) {
            setResult('You are eligible to vote.')
        } else {
            setResult('You are too young to vote.')
        }
    } 

    return(
    <div className={styles.js}>
      <div>
        <h1>Voter Eligibility</h1>
        <div className={styles.inputField}>
          <label>Your Age:</label>
          <input type="number" placeholder="0" onChange={(e) => candidate(e.target.value)} />
        </div>

        <div className={styles.result}>
          <label> {result}</label>
        </div>
      </div>
      <Footer />
    </div>
    )
}