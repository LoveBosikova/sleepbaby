import author from '../../../assets/Ferber.png';
import quote from '../../../assets/quote.png';

import styles from './author.module.scss';

function Author () {
    return (
        <section className={styles.author}>
            <div className={styles.imgSide}>
                <picture className={styles.imgWrap}>
                    <img className={styles.img} src={author} alt='автор методики Фербер' />
                </picture>
                <p className={styles.description}>Ричард Фербер - врач, директор Центра детских расстройств сна при Детской больнице Бостона.</p>
            </div>
            <div className={styles.quotesSide}>
                <div className={styles.titleWrap}>
                    <div className={styles.quotesWrap}>
                        <picture className={styles.quoteImgWrap}>
                            <img className={styles.quoteImg} src={quote} alt='Кавычка' />
                        </picture>
                        <picture className={styles.quoteImgWrap}>
                            <img className={styles.quoteImg} src={quote} alt='Кавычка' />
                        </picture>
                    </div>
                    <h1 className={styles.title}>ЦИТАТЫ РИЧАРДА ФЕРБЕРА</h1>
                </div>
                <div className={styles.quotesWrap}>
                    <p className={styles.quote}>“Если ваша кроха по-прежнему пробуждается один или два раза за ночь или не отказалась от ночных кормлений к пяти-шести месяцам, следует хорошенько обдумать ее ночные привычки”</p>
                    <p className={styles.quote}>“Если ваша кроха по-прежнему пробуждается один или два раза за ночь или не отказалась от ночных кормлений к пяти-шести месяцам, следует хорошенько обдумать ее ночные привычки”</p>
                </div>
            </div>
        </section>
    )
}

export default Author;