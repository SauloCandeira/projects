import { useState } from 'react'
import List from './components/List'
import './App.css'
import AddConcurso from './components/AddConcurso'
import ListData from './components/ListX'
import AddConcursoX from './components/AddConcursoX'
import ListX from './components/ListX'
import Counter from './components/Counter'
import useCountDown from './hooks/useCountdown'
import CountdownY from './components/CountdownY'
import Countdown2 from './components/Countdown/Countdown2'


function App() {
  // const x = useCountDown()
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className='App-header'>
        <h3> Home </h3>
      </header>
      <main>


      <Countdown2  data="12/31/2024 23:59:59" />


      <Countdown2  data="12/31/2023 23:59:59" />
      {/* <Counter title='teste' number={2}/> */}

        
      {/* 
      <ListX/>
      <AddConcursoX/> */}


        {/* <List/>
        <AddConcurso/> */}


      </main>
    </div>
  )
}

export default App
