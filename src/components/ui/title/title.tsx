import styles from './title.module.scss';

interface ITitleProps {
    text: string
}

function Title (props: ITitleProps) {
    return (
        <p className={styles.title}>{props.text}</p>
    )
}

export default Title;
