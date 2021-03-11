import Link from 'next/link'
import styles from "../../styles/javascript.module.scss"

export default function Home() {
  return (
    <>
    <div className={styles.js}>
    <h1 className="font-main text-2xl my-4">JavaScript Exercises</h1>
    <nav className={styles.nav}>
      <li>
        <Link href="/javascript-programs/equal-numbers">
          <a>Equal numbers</a>
        </Link>
      </li>
      <li>
        <Link href="/javascript-programs/even-odd">
          <a>Even or Odd</a>
        </Link>
      </li>
      <li>
        <Link href="/javascript-programs/positive-negative">
          <a>Positive or Negative</a>
        </Link>
      </li>
      <li>
        <Link href="/javascript-programs/leap-year">
          <a>Leap Year</a>
        </Link>
      </li>
      <li>
        <Link href="/javascript-programs/candidate">
          <a>Voter Eligibility</a>
        </Link>
      </li>
      <li>
        <Link href="/javascript-programs/larger-than-zero">
          <a>Larger or less than zero</a>
        </Link>
      </li>
      <li>
        <Link href="/javascript-programs/height-categorization">
          <a>Height Categorization</a>
        </Link>
      </li>
      <li>
        <Link href="/javascript-programs/three-numbers">
          <a>Largest Number</a>
        </Link>
      </li>
      <li>
        <Link href="/javascript-programs/coordinates">
          <a>Check Quadrant</a>
        </Link>
      </li>
      <li>
        <Link href="/javascript-programs/temperature">
          <a>Temperature Checker</a>
        </Link>
      </li>
    </nav>
  </div>
    </>
  )
}