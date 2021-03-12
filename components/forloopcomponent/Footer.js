import Link from 'next/link'
import styles from "../../styles/javascript.module.scss";

export default function Footer() {
    return(
        <>
            <nav className={styles.nav}>
                <li>
                    <Link href="/forloopcomponent">
                        <a>Back to list</a>
                    </Link>
                </li>
            </nav>
        </>
    )
}