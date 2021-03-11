import {useState} from "react";
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
            setResult('The person is abnormal.');
        }
    } 

    return(
        <div className={styles.js}>
        <div>
            <h1>Height Categorization (Philippines)</h1>
            <div className="flex">
            <label>Height (in cm)</label>
            <input type="number" placeholder="0" onChange={(e) => heightCat(e.target.value)} />
            </div>

            <div className="flex">
            <label> {result}</label>
            </div>
        </div>
        </div>
    )
}