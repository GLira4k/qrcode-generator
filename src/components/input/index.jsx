import React from "react";
import './styles.css'

export default function Input({ placeholder, value, onChange }){
    return(
        <div>
            <input 
            className="inputLink"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}