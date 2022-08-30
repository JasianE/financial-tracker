import React, {useState, useEffect} from "react"
import { Chart } from "react-google-charts";
import IncomeAndExpense from "./mini/IncomeAndExpense"
import Input from "./mini/Input"

const Active = ({sheet}) => {
    //Displays the active sheet in the main part of the site
    const [recentInput, setRecentInput] = useState('')
    //Everytime a new recent input is made create a new expense or income using the sheets method and then reset
    useEffect(() => {
        if(recentInput !== '' && sheet){sheet.createNewExpenseOrIncome(recentInput)}
        setRecentInput('')
    }, [recentInput])
    
    
    const changeRecentInput = (thing) => {
        setRecentInput(thing)
    }

    const data = [["Money", "Breakdown"]]
    if(sheet){
        for(let i = 0; i < sheet.expensesAndIncomes.length; i++){
            const the = sheet.expensesAndIncomes[i]
            data.push([the.name, parseInt(the.total, 10)])
        }
    }

    return(
        <div>
        <div className="pie">
        <Chart
            chartType="PieChart"
            options={{title: 'Breakdown Of Cash'}}
            data={data}
            width="100%"
            height="400px"
            legendToggle
        />
        </div>
            <Input change={changeRecentInput}/>
            <div className="incomeAndExpense2">
                <div className='bruh'>
                    <h1>Name Of Expense</h1>
                </div>
                <div className='bruh'>
                    <h1>Total Cost</h1>
                </div>
                <div className='bruh'>
                    <h1>Date Of Expense</h1>
                </div>
            </div>
            {sheet ? sheet.expensesAndIncomes.map((key) => {
                return <IncomeAndExpense name={key.name} date={key.date} total={key.total} />
            }) : ''
            }
        </div>
    )
}

export default Active