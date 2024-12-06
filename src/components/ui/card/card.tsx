import styles from './card.module.scss';

interface ICardProps {
    bgColor: string, // 'light' or 'dark'
    title: string,
    text: string,
}

function Card (props: ICardProps) {
    const { bgColor, title,text } = props;
    return (
        <li className={bgColor === 'light' ? styles.card : styles.cardDark}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
        </li>
    )
}

export default Card;