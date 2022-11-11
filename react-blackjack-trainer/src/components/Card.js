import './Card.css';
import './utilities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="row">
                <h3>icon</h3>
            </div>
            <div className="suit">
            </div>
            <div className="row">
                <FontAwesomeIcon icon={faCoffee}/>
            </div>
        </div>
    )
}