import React, {useState}from 'react'
import sheet from '../factories/sheet'

const MakeNewSheet = ({add, doIt, changeItself}) => {
    const [name, setName] = useState('')
    const [expenseOrIncome, setExpenseOrIncome] = useState('Income')

    const handleChange = (e) =>{
        if(e.target.name === 'name'){
            setName(e.target.value)
        } else {
            setExpenseOrIncome(e.target.value)
        }
    }
    //Create new sheet to sheets array using add function from app.js
    const handleSubmit = (e) => {
        e.preventDefault()
        add(sheet(name, expenseOrIncome, changeItself))
        doIt()
    }
    return(
        <form onSubmit={handleSubmit} className='maker'>
            <input 
            type='text'
            name='name'
            value={name}
            placeholder='Name'
            onChange={handleChange}
            className='input2'
            required
            />
            <select className='select' required>
                <option value={'Expense'}>Expense</option>
                <option value='Income'>Income</option>
            </select>
            <button className='button3'>Create</button>
        </form>
    )
}

export default MakeNewSheet