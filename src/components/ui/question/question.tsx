import questions from '../../../mocks/questions';

import { useState } from 'react';

import styles from './question.module.scss';

interface IQuestionProp {
    question: string,
    answer: string,
}

function Question (props: IQuestionProp) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <li className={isOpen ? styles.questionOpened : styles.questionClosed}>
            <div className={styles.header} onClick={()=> {setIsOpen(!isOpen)}}>
                <h3 className={styles.questionText}>{props.question}</h3>
                <button className={styles.bulletWrap}>
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* вертикальная */}
                        <path className={styles.verticalLine} d="M6.60022 1.25741C6.60022 0.831554 6.94545 0.486328 7.3713 0.486328C7.79716 0.486328 8.14239 0.831554 8.14239 1.25741V12.1845C8.14239 12.6104 7.79716 12.9556 7.3713 12.9556C6.94545 12.9556 6.60022 12.6104 6.60022 12.1845V1.25741Z" fill={isOpen? 'black' : 'white'}/>
                        {/* горизонтальная */}
                        <path className={styles.horizontalLine} d="M0.432251 6.72008C0.432251 6.33749 0.7424 6.02734 1.12499 6.02734H13.619C14.0016 6.02734 14.3118 6.33749 14.3118 6.72008C14.3118 7.10267 14.0016 7.41282 13.619 7.41282H1.12499C0.7424 7.41282 0.432251 7.10267 0.432251 6.72008Z" fill={isOpen? 'black' : 'white'} />
                    </svg>
                </button>
            </div>
            <div className={styles.answerWrap}>
                <p className={styles.answer}>{props.answer}</p>
            </div>
        </li>
    )
}

export default Question;