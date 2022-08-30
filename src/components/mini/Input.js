import React, {useState} from 'react'

function Input({change}){
    const [date, setDate] = useState('')
    const [total, setTotal] = useState('')
    const [name, setName] = useState('')

    //add data validation
    const handleChange = (e) => {
        switch(e.target.name){
            case 'date':
                setDate(e.target.value)
                break;
            case 'total':
                setTotal(e.target.value)
                break;
            case 'name':
                setName(e.target.value)
                break;
        }
    }
    return(
        <form className='input' onSubmit={(e) => {
            e.preventDefault()
            const data = {date, total, name}
            setDate('')
            setTotal('')
            setName('')
            change(data)
            //Set recent input in ACTIVE component
            //Used to add new income or expense into a sheet object
        }}>
            <input
            name='date'
            value={date}
            onChange={handleChange}
            required
            className='putin'
            placeholder='Date'
            />
            <input
            name='total'
            value={total}
            onChange={handleChange}
            required
            className='putin'
            placeholder='Total'
            />
            <input
            name='name'
            value={name}
            onChange={handleChange}
            required
            className='putin'
            placeholder='Name Of Transaction'
            />

            <button type='submit' className='button'>Submit</button>
        </form>
    )
}

export default Input