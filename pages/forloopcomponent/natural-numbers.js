import NaturalNumbers from '../../components/forloopcomponent/NaturalNumbers'
import Footer from '../../components/forloopcomponent/Footer'
import styles from "../../styles/javascript.module.scss"

export default function naturalNumbers() {
  const naturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.js}>
      <h1>The Natural Numbers</h1>
      <NaturalNumbers numbers={naturalNumbers} />
      <Footer />
    </div>
  );
}