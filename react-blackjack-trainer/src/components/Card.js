import './Card.css';
import './utilities.css';

export default function Card(props) {
    let {value, suit, face, additionalClasses} = props;
    value = typeof value === 'string' ? value[0].toUpperCase() : value;
    
    if (face === 'back') {
        return (
        <div className="card-container card-back">
            <img src='images/card-back.png'></img>
        </div>
        )
    }

    return (
        <div className={"card-container " + additionalClasses}>
            <div className="row">
                <div className='card-value flex-column'>
                    <p>{value}</p>
                    <h3 className={`${suit}-icon`}></h3>
                </div>
            </div>
            <div className="row justify-center">
                <h1 className={`${suit}-icon`}></h1>
            </div>
            <div className="row justify-end">
                <div className='card-value flex-column'>
                    <p>{value}</p>
                    <h3 className={`${suit}-icon`}></h3>
                </div>
            </div>
        </div>
    )
}