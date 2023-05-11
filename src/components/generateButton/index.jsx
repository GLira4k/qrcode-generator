import React from "react";
import './styles.css'

export default function GenerateButton({ onClick, btnText }){
    return(
        <div>
            <button onClick={onClick} className="generateButton">{btnText}</button>
        </div>
    )
}