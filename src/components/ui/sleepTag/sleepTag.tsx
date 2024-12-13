import styles from './sleepTag.module.scss';

interface ISleepTagProps {
    text: string,
    chosenTags: string[],
    setChosenTags: React.Dispatch<React.SetStateAction<string[]>>
}

function SleepTag (props: ISleepTagProps) {

    const {chosenTags, text, setChosenTags} = props;

    function handleTagClick (text: string, setChosenTags: React.Dispatch<React.SetStateAction<string[]>>) {
        if (!chosenTags.includes(props.text)) {
            setChosenTags([...chosenTags, text])
        } else if (chosenTags.includes(text)){
            setChosenTags(chosenTags.filter((el)=> el !== text))
        }
    }

    return (
        <li className={chosenTags.includes(props.text) ? styles.activeTag : styles.tag} onClick={()=> {handleTagClick(text, setChosenTags)}}>
            {props.text}
        </li>
    )
}

export default SleepTag;