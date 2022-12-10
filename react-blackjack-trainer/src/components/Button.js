import './Button.css';

export default function Button(props) {
    const {text, classNames, onClick : handleClick} = props;

    return (
        <button className={classNames} onClick={handleClick}>{text}</button>
    )
}