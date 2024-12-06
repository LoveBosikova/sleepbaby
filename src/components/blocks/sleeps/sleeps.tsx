import baby from '../../../assets/babySleeps.png'

import H1 from '../../ui/h1/h1';
import Title from '../../ui/title/title';

import styles from './sleeps.module.scss';

function Sleeps () {
    return (
        <section className={styles.sleeps}>
            <div className={styles.sleepsContainer}>
                <div className={styles.header}>
                    <div className={styles.textSide}>
                        <div className={styles.titleWrap}>
                            <Title text={'ДЛЯ НАЧАЛА ПРОСТО'}></Title>
                        </div>
                        <H1 text={'ДОБАВЬТЕ СОН РЕБЁНКА'}></H1>
                    </div>
                    <div className={styles.imgSide}>
                        <picture className={styles.picWrap}>
                            <img src={baby} alt='Малыш спит' className={styles.imgBaby}/>
                        </picture>
                        <p className={styles.headerText}>После внесения сна будет отображаться статистика: дневного и ночного сна, а также его продолжительность</p>
                    </div>
                </div>
                <div className={styles.main}></div>
            </div>
        </section>
    )
}

export default Sleeps;

