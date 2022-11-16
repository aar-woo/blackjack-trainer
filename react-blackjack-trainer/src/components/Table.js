import './Table.css';
import Card from './Card';
import ReactCurvedText from "react-curved-text";


export default function Table() {



    return (
        <div className='table-container'>

            <h2 className='title'>
                Blackjack Trainer
            </h2>
            <div className='table-info'>
            <ReactCurvedText
                    width={380}
                    height={100}
                    cx={178}
                    cy={0}
                    rx={140}
                    ry={100}
                    startOffset={72}
                    reversed={false}
                    text="BLACK JACK PAYS 3 TO 2"
                    textProps={{ style: { fontSize: 24 } }}
                    textPathProps={{"fill": "#a3a3a3"}}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
                />
                       <ReactCurvedText
                    width={380}
                    height={100}
                    cx={182}
                    cy={-55}
                    rx={140}
                    ry={100}
                    startOffset={90}
                    reversed={false}
                    text="DEALER MUST HIT SOFT 17"
                    textProps={{ style: { fontSize: 18 } }}
                    textPathProps={{"fill": "#ffffff"}}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
                />
            </div>
            <div className='player-cards-zone' >
                <Card face='back'></Card>
            </div>
        </div>
    )
}