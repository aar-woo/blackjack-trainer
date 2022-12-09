import './Card.css';
import './utilities.css';
import { CSSTransition } from 'react-transition-group'

export default function Card(props) {
    let {value, suit, face, additionalClasses, inProp} = props;

    value = typeof value === 'string' ? value[0].toUpperCase() : value;
    
    if (face === 'back') {
        return (
        <div className="card-container card-back">
            <img src='images/card-back.png'></img>
        </div>
        )
    }

    return (
        <CSSTransition in={inProp} appear={true} timeout={1200} classNames="card" >
            <div  className={"card-container " + additionalClasses}>
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
        </CSSTransition>

    )
}