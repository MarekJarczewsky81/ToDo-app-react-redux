import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button.js";

const ColumnForm = props => {
    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState("");
    const dispatch = useDispatch();
    
    const handleSubmit = e => {
      e.preventDefault();
      dispatch({ type: "ADD_COLUMN", payload: { title, icon } });
      setTitle("");
      setIcon("");
    };

    return (
      <form onSubmit={handleSubmit} className={styles.columnForm}>
        <span className={styles.name}>Title:</span>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span className={styles.name}>Icon:</span>
        <input
          className={styles.input}
          type="text"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
        <Button className={styles.button}>Add column</Button>
      </form>
    );
};

export default ColumnForm;
