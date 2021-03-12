import {useState} from "react";
import Footer from "../../components/javascript-programs/Footer"
import styles from "../../styles/javascript.module.scss";

export default function HeightCategories() {

    const [result, setResult] = useState('');

    const heightCat = (a) => {
        let h = parseInt(a);

        if(h <= 147) {
            setResult('The person is a dwarf.');
        } else if (h <= 163) {
            setResult('The person\'s height is average.');
        } else if (h < 213) {
            setResult('The person is tall.');
        } else {
            setResult('The person has an abnormal height.');
        }
    } 

    return(
        <div className={styles.js}>
        <div>
            <h1>Height Categorization (Philippines)</h1>
            <div className={styles.inputField}>
            <label>Height (in cm)</label>
            <input type="number" placeholder="0" onChange={(e) => heightCat(e.target.value)} />
            </div>

            <div className={styles.result}>
            <label> {result}</label>
            </div>
        </div>
        <Footer />
        </div>
    )
}