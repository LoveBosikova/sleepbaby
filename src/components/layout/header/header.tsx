import logo from '../../../assets/logo.png';
import LoginBtn from '../../ui/loginBtn/loginBtn';
import RegBtn from '../../ui/regBtn/regBtn';

import styles from './header.module.scss';

function Header () {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <picture className={styles.pictureWrap}>
                    <img className={styles.picture} src={logo} alt='SleepBabySleep logo' />
                </picture>

                <nav className={styles.navigationWrap}>
                    <ul className={styles.navigation}>
                        <li className={styles.navItemVrap}>
                            <a href="#" className={styles.navItemLink}>
                                <p className={styles.navItemText}>Качество сна</p>
                            </a>
                        </li>
                        <li className={styles.navItemVrap}>
                            <a href="#" className={styles.navItemLink}>
                                <p className={styles.navItemText}>Периоды</p>
                            </a>
                        </li>
                        <li className={styles.navItemVrap}>
                            <a href="#" className={styles.navItemLink}>
                                <p className={styles.navItemText}>Статистика</p>
                            </a>
                        </li>
                        <li className={styles.navItemVrap}>
                            <a href="#" className={styles.navItemLink}>
                                <p className={styles.navItemText}>Частые вопросы</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.buttonsWrap}>
                    <LoginBtn></LoginBtn>
                    <RegBtn></RegBtn>
                </div>
            </div>
        </header>
    )
}

export default Header;