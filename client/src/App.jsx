import React, { useEffect } from 'react'
import './styles/App.css'
import AllTasks from './components/AllTasks'
import Credentials from './components/Credentials'
import Logout from './components/Logout'
import { useRecoilState } from 'recoil'
import { loggedInAtom, activeAccountAtom } from './components/lib/atoms'

function App() {

  const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)
  const [activeAccount, setActiveAccount] = useRecoilState(activeAccountAtom)

  console.log(activeAccount)

  useEffect(() => {
    fetch('/api/checksession')
    .then(resp => {
      if(resp.ok) {
        resp.json()
        .then(data => {
          setLoggedIn(true)
          setActiveAccount(data)
        })
      }
    })
  }, [])

  return (
    <div className='mainContainer'>
      <h1>Welcome to Super Task Lister</h1>      
      {loggedIn ? <Logout/> : <Credentials/>}
      {loggedIn ? <h1>Hello {activeAccount.username}</h1> : <AllTasks/>}      
    </div>
  )
}

export default App
