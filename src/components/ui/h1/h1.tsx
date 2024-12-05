import styles from './h1.module.scss';

interface IH1Props {
    text: string
}

function H1 (props: IH1Props) {
    return (
        <h1 className={styles.h1}>{props.text}</h1>
    )
}

export default H1;