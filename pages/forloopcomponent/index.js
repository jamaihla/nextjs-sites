import Link from 'next/link'
import styles from "../../styles/javascript.module.scss"

export default function Homepage() {
  return (
      <div className={styles.js}>
        <h1>For Loop Problems Solutions</h1>
        <nav className={styles.nav}>
            <li>
                <Link href="/forloopcomponent/natural-numbers">
                    <a>Natural numbers</a>
                </Link>
            </li>
            <li>
                <Link href="/forloopcomponent/natural-sum">
                    <a>Sum of natural numbers</a>
                </Link>
            </li>
            <li>
                <Link href="/forloopcomponent/sum-numbers">
                    <a>Sum of N numbers</a>
                </Link>
            </li>
            <li>
                <Link href="/forloopcomponent/sum-ten">
                    <a>Sum of ten numbers</a>
                </Link>
            </li>
        </nav>
      </div>
  );
}