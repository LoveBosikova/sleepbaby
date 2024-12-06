import familyPic from '../../../assets/family.png'

import H1 from '../../ui/h1/h1';
import LinkBtn from '../../ui/linkBtn/linkBtn';
import Title from '../../ui/title/title';

import styles from './intro.module.scss';

function Intro () {
    return (
        <section className={styles.container}>
            <picture className={styles.familyPic}>
                <img className={styles.img} src={familyPic} alt='Семья' />
            </picture>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <Title text={'Удобный и понятный'}></Title>
                    <div className={styles.h1Wrap}>
                        <H1 text={'ТРЕКЕР СНА ДЛЯ ВАШЕГО МЛАДЕНЦА'}></H1>
                    </div>
                    <p className={styles.text}>Мы делаем сон вашего ребенка последовательным, предсказуемым и здоровым.</p>
                    <LinkBtn text={'Узнать больше!'}></LinkBtn>
                </div>
            </div>
        </section>
    )
}

export default Intro;