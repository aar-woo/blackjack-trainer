import './Table.css';
import Card from './Card';

export default function Table() {

    return (
        <div className='table-container'>
            <h2 className='title'>
                Blackjack Trainer
            </h2>
            <div className='player-cards-zone' >
                <Card suit='hearts' value='3'></Card>
            </div>
        </div>
    )
}