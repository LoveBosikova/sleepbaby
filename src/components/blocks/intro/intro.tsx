import Title from '../../ui/title/title';
import styles from './intro.module.scss';

function Intro () {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Title text={'Удобный и понятный'}></Title>

            </div>
        </section>

    )
}

export default Intro;