import React from 'react'

const Selector = ({name, change}) => {
    //Displays the didfferent sheets and when clicked changes the active sheet in app.js
    return(
        <div className='selector' onClick={() => {change(name)}}>
            <h1>{name}</h1>
            <hr></hr>
        </div>
    )
}

export default Selector