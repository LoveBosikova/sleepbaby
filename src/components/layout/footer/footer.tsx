import logo from '../../../assets/logo.png';
import telegramIcon from '../../../assets/telegram.png';
import whatsapIcon from '../../../assets/whatsapp.png';
import vkIcon from '../../../assets/vk.png';

import LinkBtn from '../../ui/linkBtn/linkBtn';
import LoginBtn from '../../ui/loginBtn/loginBtn';
import RegBtn from '../../ui/regBtn/regBtn';

import styles from './footer.module.scss';

function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoWrap}>
                <picture className={styles.pictureWrap}>
                    <img className={styles.picture} src={logo} alt='SleepBabySleep logo' />
                </picture>
                <p className={styles.copy}>&copy;Cпи малыш, спи 2023</p>
            </div>
            <div className={styles.infoWrap}>
                <h3 className={styles.header}>ДЕТИ И РОДИТЕЛИ БУДУТ ДОВОЛЬНЫ!</h3>
                <p className={styles.textDonate}>Вы можете поддержать проект - средства пойдут на оплату домена и хостинга</p>
                <LinkBtn text={'Оказать помощь'}></LinkBtn>
            </div>
            <div className={styles.socialWrap}>
                <div className={styles.buttonsWrap}>
                    <LoginBtn></LoginBtn>
                    <RegBtn></RegBtn>
                </div>
                <div className={styles.iconsWrap}>
                    <button className={styles.iconWrap}>
                        <picture className={styles.pictureIcon}>
                            <img src={telegramIcon} alt='Перейти в Telegram' />
                        </picture>
                    </button>
                    <button className={styles.iconWrap}>
                        <picture className={styles.pictureIcon}>
                            <img src={whatsapIcon} alt='Перейти в WhatsApp' />
                        </picture>
                    </button>
                    <button className={styles.iconWrap}>
                        <picture className={styles.pictureIcon}>
                            <img src={vkIcon} alt='Перейти в VK' />
                        </picture>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;