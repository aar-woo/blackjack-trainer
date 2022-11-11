import './Card.css';
import './utilities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="row">
                <div className='card-value flex-column'>
                    <p>3</p>
                    <h3 className='hearts-icon'></h3>
                </div>
            </div>
            <div className="row justify-center">
                <h1 className='hearts-icon'></h1>
            </div>
            <div className="row justify-end">
                <div className='card-value flex-column'>
                    <p>3</p>
                    <h3 className='hearts-icon'></h3>
                </div>
            </div>
        </div>
    )
}