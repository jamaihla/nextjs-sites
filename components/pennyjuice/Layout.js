import styles from '../../styles/pennyjuice/PennyJuice.module.css'

export default function Layout({children}) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}