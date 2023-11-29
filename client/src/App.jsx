import React from 'react'
import './styles/App.css'
import AllTasks from './components/AllTasks'
import Credentials from './components/Credentials'
import { useRecoilValue } from 'recoil'
import { loggedInAtom, activeAccountAtom } from './components/lib/atoms'

function App() {

  const loggedIn = useRecoilValue(loggedInAtom)
  const activeAccount = useRecoilValue(activeAccountAtom)

  return (
    <div className='mainContainer'>
      <h1>Welcome to Super Task Lister</h1>
      <div>
        <Credentials/>
      </div>
      {loggedIn ? <h1>Hello World</h1> : <AllTasks/>}      
    </div>
  )
}

export default App
