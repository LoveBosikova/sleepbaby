import baby from '../../../assets/babySleeps.png';
import arrowLeft from '../../../assets/arrowLeft.png';
import arrowRight from '../../../assets/arrowRight.png';
import bulletStar from '../../../assets/bulletStar.png';

import dayjs, { Dayjs } from 'dayjs'
// import 'dayjs/locale/ru-RU';

import { useEffect, useState } from 'react';

import H1 from '../../ui/h1/h1';
import Title from '../../ui/title/title';
import daysOfTheWeek from '../../../mocks/daysOfTheWeek';

import styles from './sleeps.module.scss';
import CalendarDay from '../../ui/calendarDay/calendarDay';
export interface Day {
    date: Dayjs,
    dayOfTheMonth: number,
    dayOfTheWeek: string
}

function Sleeps () {

    // Текущий день
    const [currentDay, setCurrentDay] = useState<Day>({date: dayjs(), dayOfTheMonth: dayjs().date(), dayOfTheWeek: daysOfTheWeek[dayjs().day()]});

    // Текущая неделя
    const [currentWeek, setCurrentWeek] = useState<Day[]>([{
        date: dayjs().subtract(3, 'day'), dayOfTheMonth: dayjs().subtract(3, 'day').date(), dayOfTheWeek: daysOfTheWeek[dayjs().subtract(3, 'day').day()]
    }, {
        date: dayjs().subtract(2, 'day'), dayOfTheMonth: dayjs().subtract(2, 'day').date(), dayOfTheWeek: daysOfTheWeek[dayjs().subtract(2, 'day').day()]
    }, {
        date: dayjs().subtract(1, 'day'), dayOfTheMonth: dayjs().subtract(1, 'day').date(), dayOfTheWeek: daysOfTheWeek[dayjs().subtract(1, 'day').day()]
    }, {
        date: dayjs(), dayOfTheMonth: dayjs().date(), dayOfTheWeek: daysOfTheWeek[dayjs().day()]
    }, {
        date: dayjs().add(1, 'day'), dayOfTheMonth: dayjs().add(1, 'day').date(), dayOfTheWeek: daysOfTheWeek[dayjs().add(1, 'day').day()]
    }, {
        date: dayjs().add(2, 'day'), dayOfTheMonth: dayjs().add(2, 'day').date(), dayOfTheWeek: daysOfTheWeek[dayjs().add(2, 'day').day()]
    }, {
        date: dayjs().add(3, 'day'), dayOfTheMonth: dayjs().add(3, 'day').date(), dayOfTheWeek: daysOfTheWeek[dayjs().add(3, 'day').day()]
    } ]);

    const [sleepType, setSleepType] = useState<string>('day'); // 'day' | 'night'

    function handleSubstractDay (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        setCurrentDay({date: currentDay.date.subtract(1, 'day'), dayOfTheMonth: currentDay.date.subtract(1, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.subtract(1, 'day').day()]})

        setCurrentWeek([{
            date: currentDay.date.subtract(3, 'day'), dayOfTheMonth: currentDay.date.subtract(3, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.subtract(3, 'day').day()]
        }, {
            date: currentDay.date.subtract(2, 'day'), dayOfTheMonth: currentDay.date.subtract(2, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.subtract(2, 'day').day()]
        }, {
            date: currentDay.date.subtract(1, 'day'), dayOfTheMonth: currentDay.date.subtract(1, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.subtract(1, 'day').day()]
        }, {
            date: currentDay.date, dayOfTheMonth: currentDay.date.date(), dayOfTheWeek: daysOfTheWeek[dayjs().day()]
        }, {
            date: currentDay.date.add(1, 'day'), dayOfTheMonth: currentDay.date.add(1, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.add(1, 'day').day()]
        }, {
            date: currentDay.date.add(2, 'day'), dayOfTheMonth: currentDay.date.add(2, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.add(2, 'day').day()]
        }, {
            date: currentDay.date.add(3, 'day'), dayOfTheMonth: currentDay.date.add(3, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.add(3, 'day').day()]
        } ])
    }

    function handleAddDay (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        setCurrentDay({date: currentDay.date.add(1, 'day'), dayOfTheMonth: currentDay.date.add(1, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.add(1, 'day').day()]})

        setCurrentWeek([{
            date: currentDay.date.subtract(3, 'day'), dayOfTheMonth: currentDay.date.subtract(3, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.subtract(3, 'day').day()]
        }, {
            date: currentDay.date.subtract(2, 'day'), dayOfTheMonth: currentDay.date.subtract(2, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.subtract(2, 'day').day()]
        }, {
            date: currentDay.date.subtract(1, 'day'), dayOfTheMonth: currentDay.date.subtract(1, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.subtract(1, 'day').day()]
        }, {
            date: currentDay.date, dayOfTheMonth: currentDay.date.date(), dayOfTheWeek: daysOfTheWeek[dayjs().day()]
        }, {
            date: currentDay.date.add(1, 'day'), dayOfTheMonth: currentDay.date.add(1, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.add(1, 'day').day()]
        }, {
            date: currentDay.date.add(2, 'day'), dayOfTheMonth: currentDay.date.add(2, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.add(2, 'day').day()]
        }, {
            date: currentDay.date.add(3, 'day'), dayOfTheMonth: currentDay.date.add(3, 'day').date(), dayOfTheWeek: daysOfTheWeek[currentDay.date.add(3, 'day').day()]
        } ])
    }


    useEffect(()=> {
        dayjs.locale('ru-RU'); // устанавливаем русскаязычную локаль 
    }, [])

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
                <div className={styles.main}>
                    <div className={styles.formSide}>
                        <form className={styles.form}>
                            <ul className={styles.calendar}>
                                <button className={styles.arrowLeft} onClick={handleSubstractDay}>
                                    <img src={arrowLeft} alt='Сместить дни на один назад'/>
                                </button>
                                    {currentWeek.map((day: Day) => <CalendarDay key={day.dayOfTheMonth} {...day}></CalendarDay>)}
                                <button className={styles.arrowRight} onClick={handleAddDay}>
                                    <img src={arrowRight} alt='Сместить дни на один вперёд'/>
                                </button>

                                <div className={styles.borderCentralDate}></div>
                                
                            </ul>

                            <div className={styles.sleepTypes}>
                                <label htmlFor='daySleepType' className={sleepType === 'day' ? styles.sleepTypeLabelActive : styles.sleepTypeLabel}>
                                    <input className={styles.sleepTypeInput} id='daySleepType' type='checkbox' checked={sleepType==='day'} onClick={()=> setSleepType('day')}/> 
                                    <p className={sleepType === 'day' ? styles.sleepTypeNameActive : styles.sleepTypeName}>Дневной сон</p>
                                    <div className={sleepType === 'day' ? styles.sleepTypeBulletWrapActive : styles.sleepTypeBulletWrap}>
                                        <img className={styles.bulleaStarImg} src={bulletStar} alt='' />
                                    </div>
                                </label>
                                <label htmlFor='nightSleepType' className={sleepType === 'night' ? styles.sleepTypeLabelActive : styles.sleepTypeLabel}>
                                    <input className={styles.sleepTypeInput} id='nightSleepType' type='checkbox' checked={sleepType==='night'} onClick={()=> setSleepType('night')}/>
                                    <p className={sleepType === 'night' ? styles.sleepTypeNameActive : styles.sleepTypeName}>Ночной сон</p>
                                    <div className={sleepType === 'night' ? styles.sleepTypeBulletWrapActive : styles.sleepTypeBulletWrap}>
                                        <img className={styles.bulleaStarImg} src={bulletStar} alt='' />
                                    </div>
                                </label>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sleeps;

