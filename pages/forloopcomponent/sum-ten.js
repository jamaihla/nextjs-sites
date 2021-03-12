import {useState} from 'react'
import SumTen from '../../components/forloopcomponent/SumTen'
import Footer from '../../components/forloopcomponent/Footer'
import styles from "../../styles/javascript.module.scss"

export default function sumTen() {

    // const [arr, setArr] = useState();
    // const [size, setSize] = useState([]);

    // const numString = (a) => {
    //     let numList = a.split(",");

    //     setSize(numList);
    // }

  const naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  return (
    <div className={styles.js}>
      <h1>Sum of ten numbers</h1>
      <div className={styles.inputField}>
        <label>Enter 10 numbers</label>
        <textarea id="story" name="story" placeholder="0" onChange={(e) => setArr(e.target.value)}/>
      </div>
      <div className="flex">
        <button className={styles.button} onClick={() => numString(arr)}>Enter</button>
      </div>
      <SumTen numbers={naturalNumbers} />
      <Footer />
    </div>
  );
}