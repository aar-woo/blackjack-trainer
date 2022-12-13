import './Button.css';

export default function Button(props) {
    const {text, value, classNames, onClick : handleClick} = props;

    return (
        <button className={classNames} value={value} onClick={handleClick}>{text}</button>
    )
}