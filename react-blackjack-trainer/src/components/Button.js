import './Button.css';
import { useState } from 'react';

export default function Button(props) {
    const [dealtCards, setDealtCards] = useState(false);
    const {text} = props;

    return (
        <button className='default-btn'>{text}</button>
    )
}