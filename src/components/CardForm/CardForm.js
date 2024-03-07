import styles from "./CardForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button.js";
import TextInput from "../TextInput/TextInput.js";

const CardForm = props => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title }, props.columnId);
    setTitle("");
    };
    
    return (
        <form onSubmit={handleSubmit} className={styles.cardForm}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    )
};

export default CardForm;