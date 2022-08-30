import React from 'react'

const IncomeAndExpense = ({name, date, total}) => {
    return(
        <div className='incomeAndExpense'>
            <div className='bruh'>
                <h1>{name}</h1>
            </div>
            <div className='bruh'>
                <h1>{'$' + total}</h1>
            </div>
            <div className='bruh'>
                <h1>{date}</h1>
            </div>
        </div>
    )
}

export default IncomeAndExpense