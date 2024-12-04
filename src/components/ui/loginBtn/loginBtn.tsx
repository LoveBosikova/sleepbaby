import login from '../../../assets/login.png';

import styles from './loginBtn.module.scss';

function LoginBtn () {
    return (
        <button className={styles.btnLogin}>
            <picture className={styles.iconWrap}>
                <img className={styles.icon} src={login} alt='Иконка войти в личный кабинет' />
            </picture>
            <p className={styles.linkText}>Войти</p>
        </button>
    )
}

export default LoginBtn;