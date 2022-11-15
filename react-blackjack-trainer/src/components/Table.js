import './Table.css';
import Card from './Card';
import ReactCurvedText from "react-curved-text";


export default function Table() {



    return (
        <div className='table-container'>

            <h2 className='title'>
                Blackjack Trainer
            </h2>
            <div className='table-info wrapper'>
                <ReactCurvedText
                    width={370}
                    height={300}
                    cx={190}
                    cy={120}
                    rx={100}
                    ry={100}
                    startOffset={35}
                    reversed={false}
                    text="BLACK JACK PAYS 3 TO 2"
                    textProps={{ style: { fontSize: 24 } }}
                    textPathProps={null}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
                />
                <h3>
                    DEALER MUST HIT SOFT 17
                </h3>

            </div>
            <div className='player-cards-zone' >
                <Card face='back'></Card>
            </div>
        </div>
    )
}