import {useState} from 'react'
import NumberSum from '../../components/forloopcomponent/NumberSum'
import Footer from '../../components/forloopcomponent/Footer'
import styles from "../../styles/javascript.module.scss"

export default function numberSum() {

    const [size, setSize] = useState(0);

//   const naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  return (
    <div className={styles.js}>
      <h1>Sum of N numbers</h1>
      <div className={styles.inputField}>
        <label>Enter number</label>
        <input type="number" placeholder="0" onChange={(e) => setSize(e.target.value)} />
      </div>
      <NumberSum size={size} />
      <Footer />
    </div>
  );
}