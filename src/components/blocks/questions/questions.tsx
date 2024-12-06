import baby from '../../../assets/babyWithQuestions.png'
import { IQuestion } from '../../../mocks/questions';

import H1 from '../../ui/h1/h1';
import Question from '../../ui/question/question';
import Title from '../../ui/title/title';

import styles from './questions.module.scss';

interface IPropsQuestns {
    questionts: IQuestion[]
}

function Questions (props: IPropsQuestns) {
    return (
        <section className={styles.questions}>
            <div className={styles.header}>
                <div className={styles.titleWrap}>
                    <div className={styles.titlePadding}>
                        <Title text={'РОДИТЕЛИ СПРАШИВАЮТ!'}></Title>
                    </div>
                    <H1 text={'ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ'}></H1>
                </div>
                <picture className={styles.imgBabyWrap}>
                    <img className={styles.imgBaby} src={baby} alt='Малыш с вопросами' />
                </picture>
            </div>
            <ul className={styles.questionsList}>
                {props.questionts.map((question: IQuestion)=> <Question 
                                                                key={question.id} 
                                                                question={question.question} 
                                                                answer={question.answer} />)}

            </ul>
        </section>
    )
}

export default Questions;