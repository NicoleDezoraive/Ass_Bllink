
import React from 'react'
import "../style.css"

function Button({name}) 
{
    return (
        <div className='BuildingButton'>
            <button className="button">
                {name}
            </button>
        </div>
    );
    }

export default Button