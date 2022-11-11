import './Card.css';
import './utilities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="row">
                <p>3</p>
                <h3 className='hearts-icon'></h3>
            </div>
            <div className="suit">
            </div>
            <div className="row">
            </div>
        </div>
    )
}