/**
 * Button component that renders a button with provided className.
 * @param {Object} props - Component props
 * @param {string} props.className - Classname for styling button
 * @param {string} props.type - Type of button (e.g. 'submit')
 */
import styles from "./Button.module.scss";

const Button = props => {
  return (<button className={styles.button}>{props.children}</button>);
};

export default Button;
