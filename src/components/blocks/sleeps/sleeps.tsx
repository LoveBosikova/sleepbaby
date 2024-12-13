import baby from '../../../assets/babySleeps.png';
import arrowLeft from '../../../assets/arrowLeft.png';
import arrowRight from '../../../assets/arrowRight.png';
import bulletStar from '../../../assets/bulletStar.png';

import dayjs, { Dayjs } from 'dayjs'

import { useEffect, useState } from 'react';

import H1 from '../../ui/h1/h1';
import Title from '../../ui/title/title';
import CalendarDay from '../../ui/calendarDay/calendarDay';

import DAYSOFTHEWEEK from '../../../mocks/daysOfTheWeek';
import SLEEPTAGS from '../../../mocks/sleepTags';

import styles from './sleeps.module.scss';
import SleepTag from '../../ui/sleepTag/sleepTag';
export interface Day {
    date: Dayjs,
    dayOfTheMonth: number,
    dayOfTheWeek: string
}

function Sleeps () {

    // Текущий день
    const [currentDay, setCurrentDay] = useState<Day>({date: dayjs(), dayOfTheMonth: dayjs().date(), dayOfTheWeek: DAYSOFTHEWEEK[dayjs().day()]});

    // Текущая неделя
    const [currentWeek, setCurrentWeek] = useState<Day[]>([{
        date: dayjs().subtract(3, 'day'), dayOfTheMonth: dayjs().subtract(3, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[dayjs().subtract(3, 'day').day()]
    }, {
        date: dayjs().subtract(2, 'day'), dayOfTheMonth: dayjs().subtract(2, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[dayjs().subtract(2, 'day').day()]
    }, {
        date: dayjs().subtract(1, 'day'), dayOfTheMonth: dayjs().subtract(1, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[dayjs().subtract(1, 'day').day()]
    }, {
        date: dayjs(), dayOfTheMonth: dayjs().date(), dayOfTheWeek: DAYSOFTHEWEEK[dayjs().day()]
    }, {
        date: dayjs().add(1, 'day'), dayOfTheMonth: dayjs().add(1, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[dayjs().add(1, 'day').day()]
    }, {
        date: dayjs().add(2, 'day'), dayOfTheMonth: dayjs().add(2, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[dayjs().add(2, 'day').day()]
    }, {
        date: dayjs().add(3, 'day'), dayOfTheMonth: dayjs().add(3, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[dayjs().add(3, 'day').day()]
    } ]);

    const [sleepType, setSleepType] = useState<string>('day'); // 'day' | 'night'
    const [timeStart, setTimeStart] = useState<string>(`${dayjs().hour()}:${dayjs().minute()}`); // Во сколько начался сон 
    const [timeEnd, setTimeEnd] = useState<string>(`${dayjs().hour()}:${dayjs().minute()+1}`); // Во сколько закончился сон 
    const [chosenTags, setChosenTags] = useState<string[]>([]); // Выбранные теги для сна
    const [comment, setComment] = useState<string>(''); // Комментарий

    function handleSubstractDay (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        setCurrentDay({date: currentDay.date.subtract(1, 'day'), dayOfTheMonth: currentDay.date.subtract(1, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.subtract(1, 'day').day()]})

        setCurrentWeek([{
            date: currentDay.date.subtract(3, 'day'), dayOfTheMonth: currentDay.date.subtract(3, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.subtract(3, 'day').day()]
        }, {
            date: currentDay.date.subtract(2, 'day'), dayOfTheMonth: currentDay.date.subtract(2, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.subtract(2, 'day').day()]
        }, {
            date: currentDay.date.subtract(1, 'day'), dayOfTheMonth: currentDay.date.subtract(1, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.subtract(1, 'day').day()]
        }, {
            date: currentDay.date, dayOfTheMonth: currentDay.date.date(), dayOfTheWeek: DAYSOFTHEWEEK[dayjs().day()]
        }, {
            date: currentDay.date.add(1, 'day'), dayOfTheMonth: currentDay.date.add(1, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.add(1, 'day').day()]
        }, {
            date: currentDay.date.add(2, 'day'), dayOfTheMonth: currentDay.date.add(2, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.add(2, 'day').day()]
        }, {
            date: currentDay.date.add(3, 'day'), dayOfTheMonth: currentDay.date.add(3, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.add(3, 'day').day()]
        } ])
    }

    function handleAddDay (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        setCurrentDay({date: currentDay.date.add(1, 'day'), dayOfTheMonth: currentDay.date.add(1, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.add(1, 'day').day()]})

        setCurrentWeek([{
            date: currentDay.date.subtract(3, 'day'), dayOfTheMonth: currentDay.date.subtract(3, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.subtract(3, 'day').day()]
        }, {
            date: currentDay.date.subtract(2, 'day'), dayOfTheMonth: currentDay.date.subtract(2, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.subtract(2, 'day').day()]
        }, {
            date: currentDay.date.subtract(1, 'day'), dayOfTheMonth: currentDay.date.subtract(1, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.subtract(1, 'day').day()]
        }, {
            date: currentDay.date, dayOfTheMonth: currentDay.date.date(), dayOfTheWeek: DAYSOFTHEWEEK[dayjs().day()]
        }, {
            date: currentDay.date.add(1, 'day'), dayOfTheMonth: currentDay.date.add(1, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.add(1, 'day').day()]
        }, {
            date: currentDay.date.add(2, 'day'), dayOfTheMonth: currentDay.date.add(2, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.add(2, 'day').day()]
        }, {
            date: currentDay.date.add(3, 'day'), dayOfTheMonth: currentDay.date.add(3, 'day').date(), dayOfTheWeek: DAYSOFTHEWEEK[currentDay.date.add(3, 'day').day()]
        } ])
    }

    function handleTimeStart (e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setTimeStart(e.target.value);
    }

    function handleTimeEnd (e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setTimeEnd(e.target.value);
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
                                <button className={styles.arrowLeft} onChange={handleSubstractDay}>
                                    <img src={arrowLeft} alt='Сместить дни на один назад'/>
                                </button>
                                    {currentWeek.map((day: Day) => <CalendarDay key={day.dayOfTheMonth} {...day}></CalendarDay>)}
                                <button className={styles.arrowRight} onChange={handleAddDay}>
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

                            <div className={styles.sleepTime}>
                                <label className={styles.timeStartWrap} htmlFor='timeStart'>
                                    <p className={styles.timeText}>Сон начался в</p>
                                    <input 
                                    className={styles.timeInput}
                                    type='time' 
                                    name='timeStart' 
                                    id='timeStart' 
                                    value={timeStart}
                                    onChange={(e)=> handleTimeStart(e)}
                                    required />
                                    {/* <div className={styles.arrowDownWrap}>
                                        <img className={styles.arrowDown} src={arrowDown} alt='Выбрать, во сколько начался сон' />
                                    </div> */}
                                </label>
                                <label className={styles.timeEndWrap} htmlFor='timeEnd'>
                                    <p className={styles.timeText}>Сон закончился в</p>
                                    <input 
                                    className={styles.timeInput} 
                                    type='time' 
                                    name='timeEnd' 
                                    id='timeEnd'
                                    value={timeEnd}
                                    onChange={(e)=> handleTimeEnd(e)}
                                    required />
                                    {/* <div className={styles.arrowDownWrap}>
                                        <img className={styles.arrowDown} src={arrowDown} alt='Выбрать, во сколько закончился сон' />
                                    </div> */}
                                </label>
                            </div>

                            <ul className={styles.sleepTags}>
                                {SLEEPTAGS.map((tag:string) => <SleepTag key={tag} text={tag} chosenTags={chosenTags} setChosenTags={setChosenTags}></SleepTag>)}
                            </ul>

                            <div className={styles.comment}>
                                <input 
                                className={styles.commentText} 
                                value={comment} 
                                onChange={(e) => setComment(e.target.value)} 
                                type='textarea' 
                                placeholder='Оставьте комментарий...' />
                            </div>

                            <div className={styles.buttonsWrap}>
                                <button className={styles.buttonSave}>Сохранить данные</button>
                                <button className={styles.buttonReset}>Сбросить данные</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sleeps;

