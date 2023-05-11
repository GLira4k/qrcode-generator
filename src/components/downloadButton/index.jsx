import React from "react";
import './styles.css';

export default function DownloadButton({ onClick, btnText }){
    return(
        <div>
            <button onClick={onClick} className="downloadButton">{btnText}</button>
        </div>
    )
}