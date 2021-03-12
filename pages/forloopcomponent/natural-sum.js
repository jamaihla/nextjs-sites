import NaturalSum from '../../components/forloopcomponent/NaturalSum'
import Footer from '../../components/forloopcomponent/Footer'
import styles from "../../styles/javascript.module.scss"

export default function naturalSum() {
  const naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.js}>
      <h1>Sum of natural numbers</h1>
      <NaturalSum numbers={naturalNumbers} />
      <Footer />
    </div>
  );
}