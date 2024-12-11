import { Day } from "../../blocks/sleeps/sleeps";

import styles from './calendarDay.module.scss';

function CalendarDay (props: Day) {
    return (
        <li className={styles.calendarDay}>
            <p className={styles.number}>{props.dayOfTheMonth}</p>
            <p className={styles.dayOfTheWeek}>{props.dayOfTheWeek}</p>
        </li>
    )
}

export default CalendarDay;