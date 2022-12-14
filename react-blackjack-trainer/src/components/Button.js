import './Button.css';

export default function Button(props) {
    const {text, value, classNames, onClick : handleClick} = props;

    return (
        <button className={'btn ' + classNames} value={value} onClick={handleClick}>{text}</button>
    )
}