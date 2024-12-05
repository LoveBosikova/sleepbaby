import styles from './regBtn.module.scss';

function RegBtn () {
    return (
        <button className={styles.btnReg}>
            <p className={styles.linkText}>Зарегистрироваться</p>
        </button>
    )
}

export default RegBtn;