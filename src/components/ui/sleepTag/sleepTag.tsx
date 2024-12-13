import styles from './sleepTag.module.scss';

interface ISleepTagProps {
    text: string,
    chosenTags: string[],
    setChosenTags: React.Dispatch<React.SetStateAction<string[]>>
}

function SleepTag (props: ISleepTagProps) {

    function handleTagClick (text: string, setChosenTags: React.Dispatch<React.SetStateAction<string[]>>) {
        
    }

    return (
        <li className={styles.tag} onClick={()=> {handleTagClick(props.text, props.setChosenTags)}}>
            {props.text}
        </li>
    )
}

export default SleepTag;