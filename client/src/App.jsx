import React, { useEffect } from 'react'
import Credentials from './components/Credentials'
import Logout from './components/Logout'
import { useRecoilState } from 'recoil'
import { loggedInAtom, activeAccountAtom } from './components/lib/atoms'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Greeting from './components/Greeting'

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
    <div className='headerContainer'>
      <h1>Welcome to Super Task Lister</h1>      
      {loggedIn ? <Logout/> : <Credentials/>}
      <Routes>
        <Route path='/' element={<Greeting/>}/>      
      </Routes>   
    </div>
  )
}

export default App
