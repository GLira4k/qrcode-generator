import React from 'react';

export default function Input({ type, placeholder }){
    return(
    <div>
        <input type={type} placeholder={placeholder} required />
    </div>
    )
};
