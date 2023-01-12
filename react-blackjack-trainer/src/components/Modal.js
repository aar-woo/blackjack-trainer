import './Modal.css'

export default function Modal(props) {
    const {text, classNames} = props;

    return (
        <div className={"modal-box " + classNames}>
            <h2>{text}</h2>
        </div>
    )
}