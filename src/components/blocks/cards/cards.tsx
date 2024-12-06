import baby from '../../../assets/baby.svg';
import clouds from '../../../assets/clouds.png'

import cardsInfo, { ICard } from '../../../mocks/cards';

import Card from '../../ui/card/card';

import H1 from '../../ui/h1/h1';
import Title from '../../ui/title/title';

import styles from './cards.module.scss';

function Cards () {
    return (
        <section className={styles.cards}>
            <picture className={styles.cloudsWrap} >
                <img src={clouds} alt='Clouds' className={styles.clouds}/>
            </picture>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.titleWrap}>
                        <div className={styles.titleContainer}>
                            <Title text={'Каждый задаётся вопросом'}></Title>
                        </div>
                        <H1 text={'КАК НОРМАЛИЗОВАТЬ СОН РЕБЁНКА?'}></H1>
                    </div>
                    <div className={styles.picWrap}>
                        <picture>
                            <img src={baby} alt='Happy baby'/>
                        </picture>
                        <p className={styles.picText}>Мы делаем сон вашего ребенка последовательным, предсказуемым и здоровым</p>
                    </div>
                </div>

                <ul className={styles.cardsContainer}>
                    {cardsInfo.map((card: ICard) => <Card 
                                                    key={card.id} 
                                                    bgColor={card.bgColor} 
                                                    title={card.title} 
                                                    text={card.text}/>
                                                    )}
                </ul>

            </div>

        </section>

    )
}

export default Cards;