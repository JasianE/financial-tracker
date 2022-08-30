import React from 'react'
import Selector from './mini/Selector'

const Sidebar = ({selectors, change, setTrue}) => {
    const handleClick = (e) => {
        e.preventDefault()
        setTrue()
    }
    let i = 0;
    return(
        <div className='sidebar'>
            {selectors.map((key) => {
                i++
                return <Selector name = {key.name} change= {change} key = {i}/>
            })}
            <div>
                <button onClick={handleClick} className='button2'>Create New Sheet</button>
            </div>
        </div>
    )
}

export default Sidebar