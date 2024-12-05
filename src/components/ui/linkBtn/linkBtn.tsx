import styles from './linkBtn.module.scss';

interface ILinkBtnProps {
    text: string
}

function LinkBtn (props: ILinkBtnProps) {
    return (
        <button className={styles.linkBtn}>
            <a className={styles.link} href="#" rel="noopener noreferrer">
                <p className={styles.text}>{props.text}</p>
            </a>
        </button>
    )
}

export default LinkBtn;