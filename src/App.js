import React, {useEffect, useState} from 'react'
import Sidebar from './components/Sidebar'
import sheet from './factories/sheet';
import './App.css';
import Active from './components/Active';
import MakeNewSheet from './components/MakeNewSheet';

function App() {
  const [sheets, setSheets] = useState([])
  const [active, setActive] = useState(() => {
    return sheets[0]
  })
  const [turnOn, setTrue] = useState(false)

  const addSheet = (newArr) => {
    setSheets((prevState) => {
      return [...prevState, newArr]
    })
    setActive(newArr)
  }
  const changeIt = (thing) => {
    setActive(sheets.find((key) => {
      return key.name == thing
    }))
  }
  const doIt = () => {
    setTrue(() => {
      return !turnOn
    })
  }

  const changeItself = (changer, name) => {
    setSheets((prevState) =>{
      const copy = [...prevState]

      for(let i = 0 ; i < copy.length; i++){
        if(copy[i].name === name){
          copy[i].expensesAndIncomes.push(changer)
        }
      }
      
      return [...copy]
    })
  }

  return (
    <div>
      <div className={turnOn ? 'App2' : 'App'}>
        <Sidebar selectors={sheets} change={changeIt} setTrue={doIt}/>
        <Active sheet = {active}/>
      </div>
      {turnOn ? 
        <MakeNewSheet add={addSheet} sheets={sheets} doIt={doIt} changeItself={changeItself}/>: ''}
    </div>
  );
}

export default App;
