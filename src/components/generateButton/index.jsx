import React from "react";

export default function GerenateButton({ onClick, btnText }){
    return(
        <div>
            <button onClick={onClick}>{btnText}</button>
        </div>
    )
}