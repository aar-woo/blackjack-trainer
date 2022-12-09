import './Button.css';

export default function Button(props) {
    const {text, onClick : handleClick} = props;

    return (
        <button className='default-btn' onClick={handleClick}>{text}</button>
    )
}