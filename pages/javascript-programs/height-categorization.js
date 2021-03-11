import {useState} from "react";
import styles from "../../styles/javascript.module.scss";

export default function HeightCategories() {

    const [result, setResult] = useState('');

    const heightCat = (a) => {
        let h = parseInt(a);

        const height = {
            dwarf: 'dwarf',
            average: 'average',
            tall: 'tall',
            abnormal: 'giant'
        }

        if(h <= 147) {
            setResult('The person is a ' + height.dwarf  + '.');
        } else if (h <= 163) {
            setResult('The person\'s height is ' + height.average  + '.');
        } else if (h < 213) {
            setResult('The person is ' + height.tall + '.');
        } else {
            setResult('The person is a '+ height.abnormal + '.');
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