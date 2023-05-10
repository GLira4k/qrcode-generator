import React from "react";

export default function DownloadButton({ onClick, btnText }){
    return(
        <div>
            <button onClick={onClick}>{btnText}</button>
        </div>
    )
}