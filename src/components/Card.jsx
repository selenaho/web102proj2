import React from "react";
import { useState } from "react";

const Card = (props) => {
    const [spanishSide, setSpanishSide] = useState(true);

    const s = props.spanish;
    const e = props.english;

    const handleClick = () => {
        setSpanishSide(!spanishSide);
    }

    return (
        <div className="card" onClick={handleClick} style = {props.style}>
            {spanishSide ? <p>{s}</p> : <p>{e}</p>}
        </div>
    )
}

export default Card;